function batch(fn) {
    return function (target, ...args) {
        // target can be one or more items(HTMLElement/NodeList)
        // NodeList.length >= 0; HTMLElement.length === undefined
        if(target.length >=0) {
            Array.from(target, item=>fn.apply(null, [item, ...args]))
        } else {
            fn.apply(null, [target, ...args])
        }
    }
}

function setColor(el, color) {
    el.style.color = color
}

function setFontSize(el, fontSize) {
    el.style.fontSize = fontSize
}

// batch
setColor = batch(setColor)
setFontSize = batch(setFontSize)

const items1 =  document.querySelectorAll('ul>li:nth-child(3n)')
const items2 = document.querySelectorAll('ul>li:nth-child(3n+1)')

// batch functions can accept one or more items
setColor(items1, 'red')
setColor(items2, 'blue')
setFontSize(items2, '24px')

