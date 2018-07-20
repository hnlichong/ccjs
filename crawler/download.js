var request = require('request')
var fs = require('fs')

// 以数据流的方式写入文件
function download1 (url, filename, fn) {
  request(url).pipe(fs.createWriteStream(filename).on('close', function (err, res) {
    if (err) {
      console.log(err)
    } else {
      fn && fn()
    }
  }))
}

// 以二进制文件的方式写入
function download2 (url, filename, fn) {
  request.get({uri: url, encoding: 'binary'}, function (err, res) {
    if (!err) {
      fs.writeFile(filename, res.body, 'binary', function (err, res) {
        if (!err) {
          fn && fn()
        } else {
          console.log(err)
        }
      })
    }
  })
}

module.exports = download1