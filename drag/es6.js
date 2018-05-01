import eventManager from '../event'

'use strict'

class Drag {
    constructor() {
        this.dragging = null
        this.eventManager = eventManager
        this.dX = 0
        this.dY = 0
        this.scrollLeft = 0
        this.scrollTop = 0
        this.minX = 0
        this.minY = 0
        this.mousedownHandler = this.mousedownHandler.bind(this)
        this.mousemoveHandler = this.mousemoveHandler.bind(this)
        this.mouseupHandler = this.mouseupHandler.bind(this)
        eventManager.addDomEventHandler(document, 'mousedown', this.mousedownHandler)
    }
    mousedownHandler(ev) {
        const el = ev.target
        if(el.className.indexOf('draggable') === -1) return

        const rect = el.getBoundingClientRect()
        this.dX = ev.clientX - rect.left
        this.dY = ev.clientY - rect.top
        this.scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft
        this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        this.maxX = document.documentElement.clientWidth || document.body.clientWidth - el.offsetWidth
        this.maxY = document.documentElement.clientHeight || document.body.clientHeight - el.offsetHeight
        this.dragging = el
        eventManager.addDomEventHandler(document, 'mousemove', this.mousemoveHandler)
        eventManager.addDomEventHandler(document, 'mouseup', this.mouseupHandler)
    }
    mousemoveHandler(ev) {
        if(this.dragging === null) return
        const el = this.dragging
        let left = ev.clientX - this.dX
        let top = ev.clientY - this.dY
        // 限幅
        left = Math.max(0, Math.min(left, this.maxX))
        top = Math.max(0, Math.min(top, this.maxY))
        el.style.cssText += `left:${left}px; top:${top}px;`
    }
    mouseupHandler(ev) {
        eventManager.removeDomEventHandler(document, 'mousemove', this.mousemoveHandler)
        eventManager.removeDomEventHandler(document, 'mouseup', this.mouseupHandler)
        this.dragging = null
    }
}

export default Drag