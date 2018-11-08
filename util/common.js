function genLongHTML() {
  var ss = ''
  for (let i = 0; i < 1000; i++) {
    ss += '<div>' + i + '</div>'
  }
  // document.body.insertAdjacentHTML('afterbegin', ss)
  var wrapper = document.createElement('div')
  wrapper.id = 'wrapper'
  wrapper.innerHTML = ss
  document.body.insertBefore(wrapper, document.body.firstChild)

}

// getTypeOf([]) => array
function getTypeOf(obj) {
  var s = Object.prototype.toString.call(obj)
  var pat = /\[object\s+(\w+)\]/
  return pat.exec(s)[1].toLowerCase()
}


/**
 * min <= random < max
 * @param min
 * @param max
 * @returns {*}
 */
function getRandom(min, max) {
  return Math.random() * (max - min) + min
}

/**
 * min <= randomInt < max
 * @param min
 * @param max
 * @returns {*}
 */
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min //The maximum is exclusive and the minimum is inclusive
}

/**
 * min <= randomInt <= max
 * @param min
 * @param max
 * @returns {*}
 */
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive
}

function getRandomItem(arr) {
  if (arr.length===0) {
    return null
  }
  return arr[getRandomInt(0, arr.length)]
}



// debounce 防抖
// 最后一次触发delay(ms)后执行一次
function debounce(method, delay = 100, context = window) {
  clearTimeout(method.timeoutId)
  method.timeoutId = setTimeout(function () {
    method.call(context)
  }, delay)
}

// throttle 函数节流
// delay(ms)里只执行一次
// 常用在高频率触发调用的函数上，比如scroll,resize等事件的handler
function throttle(method, delay = 100, context = window) {
  if (method.tId === undefined) {
    method.tId = setTimeout(function () {
      method.call(context)
      // delete method.tId
      setTimeout(function () {
        delete  method.tId
      }, delay)
    })
  }
}

function removeEmptyItem (arr) {
  return arr.filter(item=>{
    if (item===undefined || item === null) return false
    if (typeof item === 'object' && !Object.keys(item).length) return false
    return true
  })
}

function objFilterDeep(obj, prop, handler, result=[]) {
  if (Object.prototype.toString.call(obj) === '[object Object]') {
    Object.keys(obj).forEach(key => {
      if ((typeof prop === 'string' && key === prop) ||
        key.match(prop) // regex
      ) {
        // found
        if (typeof handler === 'function') {
          handler(obj, key);
        }
        result.push(obj);
      } else {
        objFilterDeep(obj[key], prop, handler, result);
      }
    });
  } else if (Object.prototype.toString.call(obj) === '[object Array]') {
    obj.forEach(item => {
      objFilterDeep(item, prop, handler, result);
    });
  } else {
    // does not match, pass
  }
  return result;
}

/**
 * parse url string to object
 * @param url {string}
 * @return {HTMLAnchorElement}
 * @example
 * input: url: "https://ad.toutiao.com/wizard/dpa/template/?page=1&limit=10"
 * output: {
 *  origin: "https://ad.toutiao.com",
 *  hostname: "ad.toutiao.com",
 *  pathname: "/wizard/dpa/template/",
 *  search: "?page=1&limit=10",
 *  }
 */
function urlParse (url) {
  const a = document.createElement('a')
  a.href = url
  return a
}


export {
  removeEmptyItem,
  objFilterDeep,
  urlParse,
}
