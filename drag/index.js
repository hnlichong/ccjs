function drag(el, doc = document, de = document.documentElement, bd = document.body) {
    // 距离不变，三个事件
    function mousedownHandler(ev) {
        let sl = de.scrollLeft || bd.scrollLeft,
            st = de.scrollTop || bd.scrollTop,
            dw = de.clientWidth || bd.clientWidth,
            dh = de.clientHeight || bd.clientHeight,
            rect = el.getBoundingClientRect(),
            dX = sl + ev.clientX - rect.left,
            dY = st + ev.clientY - rect.top,
            maxLeft = sl + dw - rect.width,
            maxTop = st + dh - rect.height
        doc.addEventListener('mousemove', mousemoveHandler)

        function mousemoveHandler(ev) {
            let sl = de.scrollLeft || bd.scrollLeft,
                st = de.scrollTop || bd.scrollTop,
                left = sl + ev.clientX - dX,
                top = st + ev.clientY - dY
            // limit
            const min = Math.min,
                max = Math.max
            left = max(0, min(left, maxLeft))
            top = max(0, min(top, maxTop))
            // batch update dom
            el.style.cssText += `left:${left}px;top:${top}px;`
        }

        doc.addEventListener('mouseup', mouseupHandler)

        function mouseupHandler(ev) {
            doc.removeEventListener('mousemove', mousemoveHandler)
            doc.removeEventListener('mouseup', mouseupHandler)
        }
    }

    return {
        enable() {
            el.addEventListener('mousedown', mousedownHandler)
        },
        disable() {
            el.removeEventListener('mousedown', mousedownHandler)
        }
    }

}

// window.drag = drag
// export default drag