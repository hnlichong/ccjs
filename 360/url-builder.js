const urlBuilder = (function f() {
    function join(domain, parts) {
        return domain + '/' + parts.join('/')
    }

    return function (domain) {
        const parts = []
        const proxy = new Proxy(join, {
            get(target, key) {
                parts.push(key)
                return proxy
            },
            apply(target, that, args) {
                return Reflect.apply(target, that, [domain, parts])
            }
        })
        return proxy
    }

})()

const url = urlBuilder('https://www.baidu.com/')
let u1 = url.aa.bb.cc93()
let u2 = url.cc.dd()
console.log(u1)
console.log(u2)
const url2 = urlBuilder('https://www.google.com.hk/?gws_rd=cr,ssl')
let u3 = url2.gg.mm()
console.log(u3)
