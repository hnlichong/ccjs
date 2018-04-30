import eventManager from './event'

const btn1 = document.querySelector('#btn1')

function onClick(ev) {
    console.log(ev.type, ev.target)
}
function onBtnClick(ev) {
    eventManager.removeDomEventHandler(document, 'mouseover', onMouseOver)
}
function onMouseOver(ev) {
    console.log(ev.type, ev.target)

}
eventManager.addDomEventHandler(document, 'click', onClick)
eventManager.addDomEventHandler(document, 'mouseover', onMouseOver)
eventManager.addDomEventHandler(btn1, 'click', onBtnClick)

window.ev = eventManager
