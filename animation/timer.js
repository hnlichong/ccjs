class Timer {
    constructor (duration) {
        this.duration = duration
        this.isRunning = false
        this.startTime = 0
        this._elapsedTime = 0
    }
    start() {
        this.isRunning = true
        this.startTime = Date.now()
    }
    stop() {
        this.isRunning = false
        this.elapsedTime = Date.now() - this.startTime
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
    constructor ({startProgress=0, interval=200, step=0.01}={}) {
        Object.assign(this, {
            startProgress,
            progress: startProgress,
            interval,
            step,
            i: -Math.log(1 - startProgress)/step,
        })
    }
    start() {
        this.timer = setInterval(()=>{
            if (this.i >= Number.MAX_SAFE_INTEGER) {
                this.stop()
                return
            } 
            this.progress = 1 - Math.exp(-this.step * this.i++)
        }, this.interval)
    }
    stop() {
        clearInterval(this.timer)
        this.progress = 1
    }
    reset() {
        this.progress = this.startProgress
        this.i = 0
    }
}

/*
const mp = new MockProgress({
    interval: 1000,
    step: 0.01,
    startProgress: 0.6,
})
mp.start()
setInterval(() => {
    console.log(`progress: ${Math.floor((mp.progress*100))}%`);
}, 100);
setTimeout(()=>{
    mp.stop()
},30000)
*/