import {newCanvas} from './canvas'

function getPixelIndex(x, y, width) {
  return width * 4 * y + x * 4
}

function dislocation1(canvas, sx = 0, sy = 0, width, height) {
  console.log('dislocation')
  width = width || canvas.width
  height = height || canvas.height
  const ctx = canvas.getContext('2d')
  const imageData = ctx.getImageData(sx, sy, width, height)
  const pixels = imageData.data
  const pixelsLen = pixels.length
  console.log('pixelsLen')
  console.log(pixelsLen)
  // for (let i=0, len=pixels.length; i<len;i+=4) {
  // }
  // 5 segments
  let ys = []
  let seg = 5
  let segH = Math.floor(height / seg)
  for (let i = 0; i <= seg; i++) {
    ys.push(i * segH)
  }
  let dire = 'right'
  let offset = 100 * 4 // 移动20px
  for (let i = 0, len = ys.length; i < len; i += 2) {
    console.log(i)
    let start = getPixelIndex(0, ys[i], width)
    let end = getPixelIndex(0, ys[i + 1], width)
    console.log('start, end')
    console.log(start, end)
    if (dire === 'left') {
      for (let i = start; i < end; i += 4) {
        if (i + offset >= pixelsLen) break
        console.log('move pixel')
        pixels[i] = pixels[i + offset]
        pixels[i + 1] = pixels[i + 1 + offset]
        pixels[i + 2] = pixels[i + 2 + offset]
        pixels[i + 3] = pixels[i + 3 + offset]
      }
      dire = 'right'
    } else {
      for (let i = end; i > start; i -= 4) {
        if (i - offset < 0) continue
        pixels[i] = pixels [i - offset]
        pixels[i + 1] = pixels [i + 1 - offset]
        pixels[i + 2] = pixels [i + 2 - offset]
        pixels[i + 3] = pixels [i + 3 - offset]
        dire = 'left'
      }
    }
  }
  ctx.putImageData(imageData, sx, sy)
}

function dislocation(img, segments = 10, offset = 10) {
  console.log('dislocation')
  let {width, height} = img
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  canvas.width = width
  canvas.height = height
  let sh = Math.floor(height / segments)
  for (let i = 0; i < segments; i++) {
    switch (i % 4) {
      case 0:
      case 2: {
        // raw
        ctx.drawImage(img, 0, i * sh, width, sh, 0, i * sh, width, sh)
        break
      }
      case 1: {
        // move right
        ctx.drawImage(img, 0, i * sh, width, sh, offset, i * sh, width, sh)
        break
      }
      case 3: {
        // move left
        ctx.drawImage(img, 0, i * sh, width, sh, -offset, i * sh, width, sh)
        break
      }
      default:
        break
    }
  }
  // 放大一点点，使得offset留下的黑色看不见
  // 缩放需要长宽比例不变
  const {canvas: ccanvas, ctx: cctx} = newCanvas(width, height)
  let scale = (width - offset * 2) / width
  cctx.drawImage(canvas, offset, height * (1 - scale) / 2,
    width * scale, height * scale, 0, 0, width, height)
  return ccanvas
}

function overlapping(ctx) {

}

export {
  dislocation
}
