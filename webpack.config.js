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
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]--[hash:base64:5]',
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
    port: 9000,
  },
  devtool: (env === 'development') ? 'source-map' : null,
};
