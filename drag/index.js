class Drag {
    constructor() {
        this.dragging = null
        this.dX = 0
        this.dY = 0
        this.handler = this.handler.bind(this)
        document.addEventListener('mousedown', this.handler)
        document.addEventListener('mousemove', this.handler)
        document.addEventListener('mouseup', this.handler)
        document.attachEvent()
    }
    handler(ev) {


    }


}