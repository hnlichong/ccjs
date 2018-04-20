let s1 = '00010001'
let s2 = '??'
let matches = s2.match(/\?/g)
let n = matches.length
function f(n) {
    n = Math.pow(2, n)
    const arr = []
    for (let i=0;i<n;i++) {
        arr.push(f2(i,2))
    }
    return arr
}
function f2(n, m) {
    let a = n
    let c = 0
    let d = 0
    // a = m * c + d
    let w = []
    while (1) {
        d = a % m
        c = (a - d) / m
        w.unshift(d)
        a = c
        if (a === 0) break
    }
    return w.reduce((accumulator, currentValue)=> accumulator+currentValue, 0)
}
let arr = f(n)
let res = 0
arr.forEach(function (item, index) {
    console.log(item)
    for (let i = 0;i<n;i++) {
        s2[i] = item[i]
    }
    console.log(s2)
    if (s1.indexOf(s2) > -1) {
        res++
    }
})
console.log(res)
