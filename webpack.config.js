var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        './src/index.jsx'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'built.js',
        publicPath: '/build/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.styl$/,
                loaders: ['style-loader', 'css-loader', 'stylus-loader']
            }
        ]
    },
    externals: {
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
    }
};
