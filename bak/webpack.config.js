const path = require('path')

module.exports = {
    entry: './es6.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                options: {
                    presets: ["es2015"]
                }
            }
        ]
    },
    resolve: {
        alias: {
            'ccjs': path.resolve(__dirname)
        }
    },
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        host: '0.0.0.0',
        port: 3334
    }
}
