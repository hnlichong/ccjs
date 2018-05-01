const path = require('path')
const glob = require('glob')
const entryFiles = glob.sync('./*/index.js')
const entryObj = entryFiles.reduce((accumulator, f)=>{
    let bundle = f
    bundle = bundle.replace('index.js', 'bundle.js')
    bundle = bundle.replace('./', '')
    accumulator[bundle] = f
    return accumulator
},{})

module.exports = {
    entry: entryObj,
    output: {
        filename: '[name]',
        path: __dirname
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
