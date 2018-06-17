function SuperObject(obj = {}) {
    return new Proxy(obj, {
        get(target, key, receiver) {
            if (!(key in receiver)) {
                receiver[key] = {}
                return new SuperObject(receiver[key])
            } else {
                const ret = receiver[key]
                if (ret && typeof ret === 'object') {
                    return new SuperObject(ret)
                }
                return ret
            }
            // bug
        }
    })
}

const obj = SuperObject()
obj.x
obj.i.j = 'jj'
obj.a.b.c = 'cc'
obj.a.b.d = 'dd'
obj.m = {}
obj.m.n = 'nn'
console.log(obj)
// console.log(JSON.stringify(obj))
