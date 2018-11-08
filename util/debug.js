/**
 * 监控timer使用情况，监控定时器是否异常增加，timerId是递增的，每个1s增加一个是正常的
 */
function logTimer () {
  setInterval(() => {
    let timer = setTimeout(() => {
      clearTimeout(timer)
    }, 0)
    console.log('timer = ' + (timer - 1))
  }, 1000)
}

/**
 * 计算函数运行时间
 * @param fn
 * @param args
 */
function getFnRunningTime(fn, args) {
  var t1 = Date.now()
  var res = fn(args)
  var t2 = Date.now()
  console.log(fn.name + ' finished, time elapsed: ' + (t2 - t1) + 'ms')
}
