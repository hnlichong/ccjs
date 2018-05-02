'use strict'

function Drag(el) {
    this.el = el
    let isTouchDevice = ('ontouchstart' in document)
    this.evs = isTouchDevice? {
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
        evs = this.evs
    // 距离不变，三个事件
    this.startHandler = function (ev) {
        let sl = de.scrollLeft || bd.scrollLeft,
            st = de.scrollTop || bd.scrollTop,
            dw = de.clientWidth || bd.clientWidth,
            dh = de.clientHeight || bd.clientHeight,
            rect = el.getBoundingClientRect(),
            dX = sl + (ev.clientX || ev.touches[0].clientX) - rect.left,
            dY = st + (ev.clientY || ev.touches[0].clientY) - rect.top,
            maxLeft = sl + dw - rect.width,
            maxTop = st + dh - rect.height
        doc.addEventListener(evs.move, moveHandler)

        function moveHandler(ev) {
            let sl = de.scrollLeft || bd.scrollLeft,
                st = de.scrollTop || bd.scrollTop,
                left = sl + (ev.clientX || ev.touches[0].clientX) - dX,
                top = st + (ev.clientY || ev.touches[0].clientY) - dY
            // limit
            const min = Math.min,
                max = Math.max
            left = max(0, min(left, maxLeft))
            top = max(0, min(top, maxTop))
            // batch update dom
            el.style.cssText += `left:${left}px;top:${top}px;`
        }

        doc.addEventListener(evs.end, endHandler)

        function endHandler(ev) {
            doc.removeEventListener(evs.move, moveHandler)
            doc.removeEventListener(evs.end, endHandler)
        }
    }
    el.addEventListener(evs.start, this.startHandler)
}
Drag.prototype.disable = function () {
    this.el.removeEventListener(this.evs.start, this.startHandler)
}

// window.drag = drag
// export default drag