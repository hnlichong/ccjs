const download = require('./download')
const path = require('path')
const _ = require('lodash')
const fs = require('fs')
const shell = require('shelljs')

function vip() {
  const imgs = require('../assets/vip/vip_imgs.json').urls
  let outputPath = path.resolve(__dirname, '../assets/vip/imgs')
  imgs.forEach((url) => {
    url = 'http:' + url
    let fileName = url.match(/[\w-_]+\.jpg/)[0]
    console.log('downloading: ' + fileName)
    download(url, outputPath + '/' + fileName, () => {
      console.log('finish download ' + fileName)
    })
  })
}

function picsum(width = 1280, height = 1080) {
  let len = 10
  let outputPath = '/Users/lichong/Pictures/1280x720'
  let url = `https://picsum.photos/${width}/${height}?image=`
  for (let i = 0; i < len; i++) {
    let fileName = `${width}x${height}_${i}.jpg`
    download(
      url + i,
      path.join(outputPath, fileName),
      () => {
        console.log('finish download ' + fileName)
      }
    )
  }
}

/**
 *
 * @param width
 * @param height
 * @param category<Array>, ['any', 'animals', 'arch', 'nature', 'people', 'tech' ]
 * @param len
 */
function placeimg({width = 1920, height = 1080, category = 'nature', len=10}) {
  let url = `https://placeimg.com/${width}/${height}/${category}`
  let outputPath = `/Users/lichong/Pictures/${width}_${height}_${category}`
  if (!shell.test('-e', outputPath)){
    shell.mkdir('-p', outputPath)
  }
  for (let i = 0; i < len; i++) {
    let fileName = _.padStart(''+i, 3, '0') + '.jpg'
    download(
      url,
      path.join(outputPath, fileName),
      () => {
        console.log('finish download ' + fileName)
      }
    )
  }
}

placeimg({
  width: 720,
  height: 1280,
  category: 'arch'
})
