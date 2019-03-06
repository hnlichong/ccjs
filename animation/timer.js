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