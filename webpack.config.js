const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: "/node_modules/"
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }, 
                    'sass-loader'
                ],
                exclude: "/node_modules/"
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin({})
    ],
    devServer: {
        contentBase: [path.join(__dirname, 'public'), path.resolve(__dirname, 'dist')],
        hot: true,
        port: 9000
    }
};