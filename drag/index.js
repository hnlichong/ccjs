import eventManager from '../event'

'use strict'
function Drag(el) {
    this.el = el
    this.isTouchDevice = ('ontouchstart' in document)
    this.evs = this.isTouchDevice? {
        start: 'touchstart',
        move: 'touchmove',
        end: 'touchend'
    }:{
        start: 'mousedown',
        move: 'mousemove',
        end: 'mouseup'
    }
    this.startHandler = new Function()

}
Drag.prototype.enable = function () {
    const el = this.el,
        doc = document,
        de = doc.documentElement,
        bd = doc.body,
        evs = this.evs,
        isTouchDevice = this.isTouchDevice
    // 距离不变，三个事件
    this.startHandler = function (ev) {
        let sl = de.scrollLeft || bd.scrollLeft,
            st = de.scrollTop || bd.scrollTop,
            dw = de.clientWidth || bd.clientWidth,
            dh = de.clientHeight || bd.clientHeight,
            rect = el.getBoundingClientRect(),
            cx = isTouchDevice? ev.touches[0].clientX:ev.clientX,
            cy = isTouchDevice? ev.touches[0].clientY:ev.clientY,
            dX = sl + cx - rect.left,
            dY = st + cy - rect.top,
            maxLeft = sl + dw - rect.width,
            maxTop = st + dh - rect.height
        doc.addEventListener(evs.move, moveHandler)
        eventManager.emit('dragStart', {dX, dY})

        function moveHandler(ev, cb) {
            // prevent default images page behaviour
            ev.preventDefault()
            let sl = de.scrollLeft || bd.scrollLeft,
                st = de.scrollTop || bd.scrollTop,
                cx = isTouchDevice? ev.touches[0].clientX:ev.clientX,
                cy = isTouchDevice? ev.touches[0].clientY:ev.clientY,
                left = sl + cx - dX,
                top = st + cy - dY
            // limit
            const min = Math.min,
                max = Math.max
            left = max(0, min(left, maxLeft))
            top = max(0, min(top, maxTop))
            // batch update dom
            el.style.cssText += `left:${left}px;top:${top}px;`
            eventManager.emit('dragMove', {left, top})
        }

        doc.addEventListener(evs.end, endHandler)

        function endHandler(ev) {
            doc.removeEventListener(evs.move, moveHandler)
            doc.removeEventListener(evs.end, endHandler)
            eventManager.emit('dragEnd')
        }
    }
    el.addEventListener(evs.start, this.startHandler)
}
Drag.prototype.disable = function () {
    this.el.removeEventListener(this.evs.start, this.startHandler)
}

export default Drag
