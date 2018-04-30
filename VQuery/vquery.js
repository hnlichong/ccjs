function addEvent(node, event, fn) {
    if(node.addEventListener) {
        node.addEventListener(event, fn)
    } else {
        // IE
        var cb = function () {
            // 调用函数，改变this为node
            fn.call(node)
        }
        node['_on' + event + '_cb'] = cb
        node.attachEvent('on'+event, cb)
    }
}
function removeEvent(node, event, fn) {
    if (node.removeEventListener) {
        node.removeEventListener(event, fn)
    } else {
        node.detachEvent('on' + event, node['_on'+ event + '_cb'])
    }

}
function getStyle(node, attr) {
    if(node.currentStyle) {
        return node.currentStyle[attr]
    } else {
        return getComputedStyle(node)[attr]
    }

}


function VQuery(vArg) {
    this.elements = []
    switch (typeof vArg) {
        case 'function':
            addEvent(window, 'load', vArg)
            break
        case 'string':
            var prefix = vArg.charAt(0)
            if (prefix === '#') {
                this.elements.push(document.getElementById(vArg.substring(1)))
            } else if (prefix === '.') {
                // IE9
                this.elements = document.getElementsByClassName(vArg.substring(1))
            } else {
                this.elements = document.getElementsByTagName(vArg)
            }
            break
        default:
            this.elements.push(vArg)
    }
}

VQuery.prototype.css = function (attr, value) {
    if (value === undefined) {
        return getStyle(this.elements[0], attr)
    }
    var length = this.elements.length
    for (var i = 0; i < length; i++) {
        var ele = this.elements[i]
        ele.style[attr] = value

    }
}

VQuery.prototype.click = function (fn) {
    var length = this.elements.length
    for (var i = 0; i < length; i++) {
        var ele = this.elements[i]
        addEvent(ele, 'click', fn)

    }
}

VQuery.prototype.show = function () {
    this.css('display', 'block')
}

VQuery.prototype.hide = function () {
    this.css('display', 'none')
}
VQuery.prototype.hover = function (mouseEnterCb, mouseLeaveCb) {
    for (var i = 0; i < this.elements.length; i++) {
        var ele = this.elements[i]
        addEvent(ele, 'mouseenter', mouseEnterCb)
        addEvent(ele, 'mouseleave', mouseLeaveCb)
    }

}
function $$(vArg) {
    return new VQuery(vArg)
}