'use strict'
import eventManager from '../event'
import Drag from './index.js'

// 碰不上的情况只有4种
const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')
const box2Drag = new Drag(box2)
box2Drag.enable()
function checkCollide() {
    let w2 = box2.offsetWidth,
        h2 = box2.offsetHeight
    let {t1, r1, b1, l1} = box1.getBoundingClientRect()
    eventManager.addHandler('dragMove', (ev)=>{
        let {left: l2, top: t2} = ev
        let r2 = l2 + w2,
            b2 = t2 + h2
        console.log({t2, r2, b2, l2})
        if (b2 < t1 || l2 > r1 || t2 > b1 || r2 < l1) {
            console.log('没碰上')
        } else {
            console.log('碰上了')
        }
    })
}
checkCollide()
