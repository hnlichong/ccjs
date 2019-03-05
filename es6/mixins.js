class Size {
    width = 100
    height = 100
    constructor(width, height) {
        this.width = width
        this.height = height
    }
    get size() {
        return [this.width, this.height]
    }
}

class Position {
    x = 0
    y = 0
    static ss = 'static ss'
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    get position() {
        return [this.x, this.y]
    }
    static sayName() {
        console.log('Position')
    }
    set tt(val){
    }
    get tt() {
        return 'tt'
    }
}

// todo: Reflect.ownKeys()与Object.keys()的区别
function copyProperties(source, target) {
    const descrs = Object.getOwnPropertyDescriptors(source)
    for (let key of ['constructor', 'prototype', 'name']) {
        delete descrs[key]
    }
    Object.defineProperties(target, descrs)
}

function mixin(...mixins) {
    class Mixin {}
    for (let m of mixins) {
        copyProperties(m, Mixin)
        copyProperties(m.prototype, Mixin.prototype)
    }
    return Mixin
}

class Rect extends mixin(Size, Position){
    constructor() {
        super()
    }

}

const rect = new Rect()
console.log(rect.size)
console.log(rect.position)  // bug: undefined
// bug: 没法实例化超类

