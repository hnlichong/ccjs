let n = readInt()
// let n = 321
let m = n%2? parseInt(n/2) + 1:n/2+1
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
let res = f(n, m)
// console.log(res)
print(res)