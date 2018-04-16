// let n = readInt()
let n = 321
// let m = 8
const weightSums = []
function f(n, m) {
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
for (let m = 2; m <= n; m++) {
    let ws = 0
    if (m <= 36) {
        let s = n.toString(m)
        ws = s.split('').reduce((acc, val) => acc + parseInt(val, m), 0)
    } else {
        ws = f(n, m)
    }
    weightSums.push(ws)
    // console.log(ws)
}
let res = Math.max.apply(null, weightSums)
console.log(res)
// print(res)
