/*
EventManager is a single instance class
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
}
export default new EventManager()