import axios from 'axios';
import { uriToUrl } from './cdn';
import _ from 'lodash';

let imageUploadUrl = '';
try {
  imageUploadUrl = require('src/const/api').upload_image;
} catch (e) {}

/************ utils **************/

function type(obj) {
  return (
    Object.prototype.toString.call(obj).match(/\[object (.+)\]/)[1] || 'Object'
  );
}
function trim(str) {
  return str.replace(/^\s+|\s+$/gm, '');
}
function hex(x) {
  return ('0' + parseInt(x).toString(16)).slice(-2);
}

/**
 * rgba to hex(六位，舍弃alpha)
 * @param rgba
 * @returns {*}
 */
function rgbaToHex(rgba) {
  if (/^#/.test(rgba)) {
    return rgba;
  }
  const parts = rgba.substring(rgba.indexOf('(')).split(',');
  const r = hex(trim(parts[0].substring(1)));
  const g = hex(trim(parts[1]));
  const b = hex(trim(parts[2]));
  return '#' + r + g + b;
}

/*********** end of utils *********/

function newCanvas(width = 1280, height = 720) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  return { canvas, ctx };
}

/**
 *
 * @param url (url | uri)
 * @param crossOrigin
 * @return {Promise<any>}
 */
function loadImage(url, crossOrigin = true) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve(img);
    };
    img.onerror = () => {
      reject(new Error('image load error!'));
    };
    // handle cross-origin
    if (crossOrigin) {
      img.crossOrigin = 'anonymous';
    }

    // load image
    if (url.match(/^(\/|data:)/)) {
      // local image
      img.src = url;
    } else if (url.match(/^(http(s)?:)?\/\//)) {
      // todo CORS 跨域图片服务。有些图片需要跨域请求，才能用于canvas编辑
      // img.src = Api.cors_img + url;
      // 未跨域:
      img.src = url;
    } else {
      // uri
      img.src = uriToUrl(url);
    }
  });
}

async function fileToImage(f) {
  const fr = new FileReader();
  fr.readAsDataURL(f);
  await new Promise(resolve => {
    fr.onload = resolve;
  });
  const img = new Image();
  img.src = fr.result;
  await new Promise(resolve => {
    img.onload = resolve;
  });
  return img;
}

/**
 *
 * @param image
 * @param scaleMode
 ['no-scale', 'contain', 'cover',  'stretch']
 [不缩放，      等比缩放             非等比缩放]
 * @param position: destination position
 * @param dw
 * @param dh
 * @return {Promise<HTMLCanvasElement>}
 */
async function imageToCanvas(
  image,
  { scaleMode = 'no-scale', position = '0 0', dw, dh }
) {
  // dom img
  let img = null;
  // console.log('image type');
  // console.log(Object.prototype.toString.call(image));

  switch (Object.prototype.toString.call(image)) {
    case '[object String]': {
      // url
      img = await loadImage(image);
      break;
    }
    case '[object File]':
    case '[object Blob]': {
      img = await fileToImage(image);
      break;
    }
    case '[object HTMLImageElement]':
    case '[object HTMLCanvasElement]':
    default: {
      img = image;
      break;
    }
  }
  const sw = img.width;
  const sh = img.height;
  let scale = 1;
  dw = dw || sw;
  dh = dh || sh;

  const { canvas, ctx } = newCanvas(dw, dh);

  if (scaleMode === 'no-scale') {
    ctx.drawImage(img, 0, 0);
    return canvas;
  }
  if (scaleMode === 'stretch') {
    ctx.drawImage(img, 0, 0, dw, dh);
    return canvas;
  }

  if (scaleMode === 'contain') {
    // 较长边占满，较短边留白
    scale = sw / sh > dw / dh ? dw / sw : dh / sh;
  }
  if (scaleMode === 'cover') {
    // 较短边占满，较长边截断
    scale = sw / sh > dw / dh ? dh / sh : dw / sw;
  }

  let sx = 0;
  let sy = 0;
  if (position === 'center') {
    // ctx.drawImage(img, (sw - dw / scale) / 2, (sh - dh / scale) / 2, dw / scale, dh / scale , 0, 0, dw, dh);
    sx = (sw - dw / scale) / 2;
    sy = (sh - dh / scale) / 2;
  }
  if (position === '0 0') {
    // ctx.drawImage(img, 0, 0, dw / scale, dh / scale, 0, 0, dw, dh);
    sx = sy = 0;
  }
  ctx.drawImage(img, sx, sy, dw / scale, dh / scale, 0, 0, dw, dh);
  return canvas;
}

/**
 *
 * @param image
 * @param url
 * @returns {Promise<AxiosPromise<any>>}
 */
async function uploadImage(image, url = imageUploadUrl) {
  let file = null;
  // convert to file
  if (Object.prototype.toString.call(image) === '[object File]') {
    file = image;
  } else if (Object.prototype.toString.call(image) === '[object Blob]') {
    file = new File([image], 'filename', { type: 'image/jpeg' });
  } else {
    // img url, img el, canvas el
    file = await imageToFile(image);
  }
  const data = new FormData();
  data.append('Filedata', file);
  return axios({
    url,
    method: 'POST',
    data,
    withCredentials: true
  });
}

/**
 *
 * @param image<>
 * @param format
 * @param quality
 * @param toBlob
 * @returns {Promise<blob>}
 */
async function compressImage(
  image,
  { format = 'image/jpeg', quality = 1, toBlob = false }
) {
  const canvas = await imageToCanvas(image, {});
  if (!toBlob) {
    return {
      width: canvas.width,
      height: canvas.height,
      dataURL: canvas.toDataURL(format, quality)
    };
  }
  const blob = await canvasToFile(canvas, { format, quality });
  return {
    width: canvas.width,
    height: canvas.height,
    blob
  };
}

async function compressImageTo(image, maxSize) {
  console.log('compressImageTo');
  let file = image;
  const t = type(image);
  if (t !== 'File' || t !== 'Blob') {
    file = await imageToFile(image);
  }
  console.log('origin size: ' + file.size);
  if (file.size <= maxSize) {
    return file;
  }
  /* eslint-disable no-await-in-loop */
  // 尽可能少的压缩，直到满足体积要求
  for (let quality = 0.9; file.size > maxSize; quality -= 0.1) {
    const imgObj = await compressImage(file, { quality, toBlob: true });
    file = imgObj.blob;
  }
  console.log('after compress, file size: ' + file.size);
  if (file.size > maxSize) {
    return false;
  }
  /* eslint-enable no-await-in-loop */
  return file;
}

async function canvasToFile(canvas, { format = 'image/jpeg', quality = 1 }) {
  return new Promise(resolve => {
    canvas.toBlob(
      blob => {
        resolve(blob);
      },
      format,
      quality
    );
  });
}

async function imageToFile(image) {
  const canvas = await imageToCanvas(image, {});
  return await canvasToFile(canvas, {});
}

async function mergeImage(
  elements,
  width = 1280,
  height = 720,
  maxSize = null
) {
  // sort by z index
  if (!Array.isArray(elements)) return;
  elements = _.cloneDeep(elements);
  elements.sort((a, b) => {
    // a < b
    return a.z0 - b.z0;
  });
  // init canvas
  const { canvas, ctx } = newCanvas(width, height);
  ctx.textAlign = 'start';
  ctx.textBaseline = 'top';

  async function drawImage(el) {
    const { web_uri, width, height, x0, y0 } = el;
    const img = await loadImage(web_uri);
    ctx.drawImage(img, x0, y0, width, height);
  }

  function drawText(el) {
    const { msg, font_family, font_size, color, width, height, x0, y0 } = el;
    ctx.font = `${font_size}px "${font_family}"`;
    ctx.fillStyle = color;
    ctx.fillText(msg, x0, y0);
  }

  // draw element
  for (let el of elements) {
    if (!el._element_type) continue;
    if (el._element_type.match(/(image|all)/)) {
      await drawImage(el);
    } else if (el._element_type === 'text') {
      drawText(el);
    }
  }

  let image = canvas;
  // compress image
  if (maxSize) {
    image = await compressImageTo(image, maxSize);
  }
  // upload
  const { data } = await uploadImage(image);

  return data.uri;
}
/********* ImageData ************/
async function getImageData (url) {
  const canvas = await imageToCanvas(url)
  const ctx = canvas.getContext('2d')
  return ctx.getImageData(0, 0, canvas.width, canvas.height);
}

function getPixel( imagedata, x, y ) {
  let position = ( x + imagedata.width * y ) * 4, data = imagedata.data;
  return { r: data[ position ], g: data[ position + 1 ], b: data[ position + 2 ], a: data[ position + 3 ] };
}

/********* Validation Utils **************/
/**
 * checkDimension
 * @param sw {number} source width
 * @param sh {number} source height
 * @param td {object} target dimension
 * @return {boolean}
 */
function checkDimension(sw, sh, td) {
  const { min, max, ratio } = td;
  if (min) {
    if (typeof min.w === 'number' && min.w > sw) return false;
    if (typeof min.h === 'number' && min.h > sh) return false;
  }
  if (max) {
    if (typeof max.w === 'number' && max.w < sw) return false;
    if (typeof max.h === 'number' && max.h < sh) return false;
  }
  if (ratio) {
    if ((sw / sh).toFixed(2) !== ratio.toFixed(2)) return false;
  }
  return true;
}


export {
  rgbaToHex,
  newCanvas,
  loadImage,
  imageToCanvas,
  uploadImage,
  fileToImage,
  compressImage,
  compressImageTo,
  canvasToFile,
  imageToFile,
  mergeImage
};
