/*
EventManager is a single instance class
supported IE9+
 */
class EventManager {
    constructor() {
        this.events = {}
        this.domEvents = new Map()
        // on is an alias for addHandler
        this.on = this.addHandler
    }
    addHandler(eventName, handler) {
        if (this.events[eventName] === undefined) {
            this.events[eventName] = []
        }
        if (this.events[eventName].indexOf(handler) === -1) {
            this.events[eventName].push(handler)
        }
    }
    removeHandler(eventName, handler) {
        const arr = this.events[eventName]
        if(arr !== undefined) {
            let i = arr.indexOf(handler)
            if (i !== -1) {
                arr.splice(i, 1)
            }
        }
    }
    emit(eventName, eventObj={}) {
        if (this.events[eventName] === undefined) return
        eventObj.type = eventName
        this.events[eventName].forEach(handler => handler(eventObj))
    }
    addDomEventHandler(el, type, handler) {
        let obj = {}
        if(!this.domEvents.has(el)) {
            obj._delegateHandler = function(ev) {
                obj[ev.type].forEach(handler => handler(ev))
            }
            this.domEvents.set(el, obj)
        }else {
            obj = this.domEvents.get(el)
        }
        if(obj[type] === undefined) {
            obj[type] = []
            el.addEventListener(type, obj._delegateHandler)
        }
        obj[type].push(handler)
    }
    removeDomEventHandler(el, type, handler) {
        if(this.domEvents.has(el)) {
            const obj = this.domEvents.get(el)
            if(obj[type] !== undefined) {
                let i = obj[type].indexOf(handler)
                if (i !== -1) {
                    obj[type].splice(obj[type].indexOf(handler), 1)
                }
                if(obj[type].length === 0) {
                    el.removeEventListener(type, obj._delegateHandler)
                }
            }
        }
    }

}
export default new EventManager()