var webpack = require('webpack');

module.exports = {
    context: __dirname + '/public/script',
    entry: './my/app',
    output: {
        path: __dirname + '/public/build',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
            __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
        })
    ],
    externals: {
        'react': 'React',
        'react-router': 'ReactRouter',
        'jquery': 'jQuery',
        'reflux': 'Reflux'
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: {compact: false}}
        ]
    }
};