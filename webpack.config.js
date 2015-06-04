var webpack = require('webpack');

module.exports = {
    context: __dirname + '/script',
    entry: './my/index',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
            __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
        })
    ],
    resolve: {
        alias: {
            'react': '../lib/react',
            'react-router': '../lib/ReactRouter'
        }
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: {compact: false}}
        ]
    }
};