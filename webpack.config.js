const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const env = process.env.NODE_ENV || 'development';

/**
 * Settings for SVGO (svg optimizition plugin)
 * @param mode
 * @returns {{plugins: *[]}}
 */
const getSVGOOptions = (mode) => {
  const isMono = mode === 'monoicons';
  return {
    plugins: [
      { cleanupIDs: true },
      { cleanupAttrs: true },
      { removeDoctype: true },
      { removeComments: true },
      { removeMetadata: true },
      { removeTitle: true },
      { removeDesc: true },
      { removeUselessDefs: true },
      { removeXMLNS: true },
      { removeEditorsNSData: true },
      { removeEmptyAttrs: true },
      { removeHiddenElems: true },
      { removeEmptyText: true },
      { removeUnusedNS: true },
      { collapseGroups: true },
      { removeDimensions: true },
      { removeStyleElement: false },
      { removeAttrs: isMono && { attrs: '(fill)' } },
    ],
  };
};

module.exports = {
  mode: env,
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      Root: path.resolve(__dirname, 'src/'),
      View: path.resolve(__dirname, 'src/view/'),
      Components: path.resolve(__dirname, 'src/view/components/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]--[hash:base64:5]',
            },
          },
          'sass-loader',
        ],
        exclude: '/node_modules/',
      },
      {
        test: /\.pug$/,
        use: ['pug-loader'],
        exclude: '/node_modules/',
      },
      {
        test: /\/icons\/.*\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              extract: false,
            },
          },
          {
            loader: 'svgo-loader',
            options: getSVGOOptions(null),
          },
        ],
      },
      {
        test: /\/monoicons\/.*\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              extract: false,
            },
          },
          {
            loader: 'svgo-loader',
            options: getSVGOOptions('monoicons'),
          },
        ],
      },
      {
        test: /\/images\/.*\.svg$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'react-svg-loader',
            options: {
              svgo: {
                plugins: [
                  {
                    removeTitle: true,
                  },
                ],
                floatPrecision: 2,
              },
            },
          },
        ],
        exclude: '/node_modules/',
      },
      {
        test: /\.(png|jpg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin({}),
    new HtmlWebpackPlugin({
      title: 'Arnie\'s React Boilerplate',
      template: 'public/index.pug',
      filename: 'index.html',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    host: 'localhost',
    port: 9000,
  },
  devtool: (env === 'development') ? 'source-map' : false,
};
