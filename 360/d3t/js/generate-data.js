const fs = require('fs');
(function (ipNum, sourceIP) {
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
        if (arr.length === 0) {
            return null
        }
        ret = arr[getRandomInt(0, arr.length)]
        if (options && Array.isArray(options.exclude)) {
            while (options.exclude.indexOf(ret) > -1) {
                ret = arr[getRandomInt(0, arr.length)]
            }
        }

        return ret
    }

    function genIPs(n) {
        let ret = []
        let max = 256
        let len = 0
        outermost:
        for (let i1 = 10; i1 < max; i1++) {
            for (let i2 = 0; i2 < max; i2++) {
                for (let i3 = 0; i3 < max; i3++) {
                    for (let i4 = 0; i4 < max; i4++) {
                        ret.push([i1, i2, i3, i4].join('.'))
                        len++
                        if (len >=n) break outermost
                    }
                }
            }
        }
        return ret
    }

    ipNum = ipNum || 500
    let ips = genIPs(ipNum)
    let protocols = ['DNS', 'Telnet', 'RDP', 'HTTP', 'MySQL', 'MsSQL', 'HTTP_Connect', 'LDAP']
    let data = []
// data = ['sip','dip', 'protocol']
    sourceIP = sourceIP || '10.16.44.12'
    ips.forEach(dip => {
        data.push([sourceIP, dip, getRandomItem(protocols)])
    })
// console.log(data)
    let d3data = []
    let protoUsed = []
    for (let i=0,len=data.length;i<len;i++) {
        let item = data[i]
        // d3data.push({
        //     name: item[0],
        //     parent: '',
        //     type:1
        // })
        // d3data.push({
        //     name:item[2],
        //     parent: item[0],
        //     type:2
        // })
        d3data.push({
            name:item[1],
            parent: item[2],
            type:3
        })
        if(protoUsed.indexOf(item[2]) === -1) {
            protoUsed.push(item[2])
        }
    }
    protoUsed.forEach(proto=>{
        d3data.push({
            name: proto,
            parent: sourceIP,
            type: 2
        })
    })
    d3data.push({
        name: sourceIP,
        parent: '',
        type: 1
    })
    console.log('---------d3data------------')
    console.log(d3data.length)
    console.log(data.length)
    fs.writeFileSync('d3data.json', JSON.stringify(d3data))
    fs.writeFileSync('d3data-info.json', JSON.stringify({
        dataLen: ipNum,
        protocols: protoUsed,
        protoLen: protoUsed.length,
    }))

})(500, '10.16.44.12')
