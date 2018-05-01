const glob = require('glob')

const entryFiles = glob.sync('./*/index.js')
const entryObj = entryFiles.reduce((accumulator, f)=>{
    let bundle = f
    bundle = bundle.replace('index.js', 'bundle.js')
    bundle = bundle.replace('./', '')
    accumulator[bundle] = f
    return accumulator
},{})
console.log(entryObj)



