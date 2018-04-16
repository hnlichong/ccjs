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

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive
}

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min //The maximum is exclusive and the minimum is inclusive
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min
}

function getFnRunningTime(fn, args) {
    var t1 = Date.now()
    var res = fn(args)
    var t2 = Date.now()
    console.log(fn.name + ' finished, time elapsed: ' + (t2 - t1) + 'ms')
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

