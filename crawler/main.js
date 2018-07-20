const download = require('./download')
const imgs = require('../assets/vip/vip_imgs.json').urls.slice(0, 10)
const path = require('path')
let p = path.resolve(__dirname, '../assets/vip/img')
imgs.forEach((url) => {
  url = 'http:' + url
  let fileName = url.match(/[\w-_]+\.jpg/)[0]
  console.log('downloading: ' + fileName)
  download(url, p + '/' + fileName, () => {
    console.log('finish download ' + fileName)
  })
})