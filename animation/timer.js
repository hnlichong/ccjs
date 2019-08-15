class Stopwatch {
    constructor (duration) {
        this.duration = duration
        this.isRunning = false
        this.startTime = 0
        this._elapsedTime = 0
    }
    start() {
        this.startTime = Date.now() - this._elapsedTime
        this.isRunning = true
    }
    stop() {
        this.elapsedTime = Date.now() - this.startTime
        this.isRunning = false
    }
    reset() {
        this.elapsedTime = 0
    }
    get elapsedTime() {
        return this.isRunning? Date.now() - this.startTime:this._elapsedTime
    }
    set elapsedTime(value) {
        this._elapsedTime = value
    }
    getElaspedTime() {
        return this.elapsedTime
    }
    get isOver() {
        return this.elapsedTime >= this.duration
    }
  }
  
  class MockProgress {
    constructor (options={startProgress=0, timeScale=10000, interval=200, onUpdate=null}={}) {
      // options = {startProgress:0, timeScale:10000, interval:200, onUpdate:null, ...options}
      Object.assign(this, options)
      this.progress = options.startProgress
        this.stopwatch = new Stopwatch()
        this.stopwatch.elapsedTime = -Math.log(1 - this.startProgress) * this.timeScale
    }
    start() {
        this.stopwatch.start()
        this.timer = setInterval(()=>{
            this.progress = 1 - Math.exp(-this.stopwatch.elapsedTime / this.timeScale)
            if (this.onUpdate) this.onUpdate(this.progress)
        }, this.interval)
    }
    stop() {
        clearInterval(this.timer)
    }
    reset() {
        this.progress = this.startProgress
        this.stopwatch.reset()
        this.stopwatch.elapsedTime = -Math.log(1 - this.startProgress) * this.timeScale
    }
  }
  
  /*
  const mp = new MockProgress({
    startProgress: 0.6,
  })
  mp.start()
  setInterval(() => {
    console.log(`progress: ${Math.floor((mp.progress*100))}%`);
  }, 100);
  setTimeout(()=>{
    mp.stop()
  }, 60000)
  */
  
  export {
    MockProgress,
  }
  