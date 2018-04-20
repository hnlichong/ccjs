const path = require('path')

const ROOT = path.resolve(__dirname, 'cc2048')
const DIST = path.resolve(ROOT, 'dist')

module.exports = {
    entry: path.resolve(ROOT, 'js/main.js'),
    output: {
        filename: 'bundle.js',
        path: DIST
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'app')
                ],
                loader: "babel-loader",
                options: {
                    presets: ["es2015"]
                }
            }
        ]
    },
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'app')
        ]
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: ROOT,
    }
}
