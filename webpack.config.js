const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const env = process.env.NODE_ENV || 'development';

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
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true, // true outputs JSX tags
              svgo: {
                plugins: [
                  {
                    removeTitle: true,
                    removeAttrs: ['fill'],
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
    host: 'arnie.site',
    port: 9000,
    proxy: {
      '/weather': {
        target: 'http://arnie.site:9000',
        pathRewrite: { '^/weather': '' },
      },
    },
  },
  devtool: (env === 'development') ? 'source-map' : null,
};
