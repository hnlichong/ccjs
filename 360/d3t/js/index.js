/*
let data = {
    'thead': ['sip', 'dip', 'proto'],
    'tbody': [
        // ['8.8.8.8', '4.4.4.4', 'DNS'],
        //...
    ]
}

*/

/**
 * min <= randomInt < max
 * @param min
 * @param max
 * @returns {*}
 */
function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min //The maximum is exclusive and the minimum is inclusive
}

function getRandomItem(arr, options) {
    let ret = null
    if (arr.length===0) {
        return null
    }
    ret = arr[getRandomInt(0, arr.length)]
    if (options && Array.isArray(options.exclude)) {
        while(options.exclude.indexOf(ret) > -1) {
            ret = arr[getRandomInt(0, arr.length)]
        }
    }

    return ret
}

function genIPs(n) {
    let ret = []
    let max = 256
    let len = 0
    for(let i1=10;i1<max;i1++) {
        for(let i2=0;i2<max;i2++) {
            for(let i3=0;i3<max;i3++) {
                for(let i4=0;i4<max;i4++) {
                    ret.push([i1,i2,i3,i4].join('.'))
                    len++
                    if(len>n) break
                }
                if(len>n) break
            }
            if(len>n) break
        }
        if(len>n) break
    }
    return ret
}
let ips = genIPs(500)
let protocols = ['Telnet', 'RDP', 'HTTP', 'MySQL', 'MsSQL', 'HTTP_Connect', 'LDAP']
let data = []
// data = ['sip','dip', 'protocol']
ips.forEach(sip=>{
    data.push([sip, getRandomItem(ips,{exclude: [sip]}), getRandomItem(protocols)])
})
// console.log(data)
let dataJSON = data.reduce((acc, item)=>{
    acc.push({
        sip: item[0],
        dip: item[1],
        proto: item[2]
    })
    return acc
}, [])
console.log('----------dataJSON--------------')
console.log(dataJSON)

function groupBy(objArr, prop) {
    return objArr.reduce((acc,obj)=>{
        let key = obj[prop]
        if (acc[key] === undefined) {
            acc[key] = []
        }
        acc[key].push(obj)
        return acc
    }, {})
}
let sipObj = {},
    dipObj = {},
    protoObj = {}
sipObj = groupBy(dataJSON, 'sip')
dipObj = groupBy(dataJSON, 'dip')
protoObj = groupBy(dataJSON, 'proto')
console.log('----------sipObj--------------')
console.log(sipObj)
console.log('----------dipObj--------------')
console.log(dipObj)
console.log('----------protoObj--------------')
console.log(protoObj)

