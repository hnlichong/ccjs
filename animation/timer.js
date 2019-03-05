class Timer {
    constructor (duration) {
        this.duration = duration
        this.running = false
        this.startTime = 0
        // this.elapsedTime = 0
    }
    start() {
        this.running = true
        this.startTime = Date.now()
    }
    stop() {
        this.running = false
        this.elapsedTime = Date.now() - this.startTime
    }
    // getElapsedTime() {
    //     return this.running? Date.now() - this.startTime:this.elapsedTime
    // }
    get elapsedTime() {
        return this.running? Date.now() - this.startTime:this.elapsedTime
    }
}