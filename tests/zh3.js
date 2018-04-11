// let nn = parseInt(readline())
let nn = 1000
function ok(n) {
    let arr = []
    const target = [2, 3, 5]
    for (let i=2;i<=n;i++) {
        while (n%i ===0) {
            arr.push(i)
            n = n/i
        }
        // if (n===1) break
    }
    let res = arr.some(function (item) {
        return target.indexOf(item) === -1
    })
    return !res

}
const okArr = [1]
let res
let n = 2
while (1) {
    if (okArr.length === nn) {
        res = okArr[nn-1]
        break
    }
    if (ok(n)) okArr.push(n)
    n++
}

console.log(okArr)
console.log(res)
// print(res)