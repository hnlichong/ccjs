let n = 57
// let n = readInt()
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

const weightSums = []
for (let m = 2; m <= n; m++) {
    weightSums.push(f(n, m))
}
let res = Math.max.apply(null, weightSums)
console.log(res)
// print(res)
