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
                    path.resolve(ROOT, 'js')
                ],
                loader: "babel-loader",
                options: {
                    presets: ["es2015"]
                }
            },
            {
                test: /\.css$/,
                include: [
                    path.resolve(ROOT, 'css')
                    ],
                use: ['style-loader', 'css-loader']

            },
            {
                test: /\.styl$/,
                include: [
                    path.resolve(ROOT, 'css')
                    ],
                // Chain the less-loader with the css-loader and the style-loader
                use: [{
                    loader: 'style-loader', // creates style nodes from JS strings
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: 'css-loader', // translates CSS into CommonJS
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: 'stylus-loader' // compiles Stylus to CSS
                }]
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
