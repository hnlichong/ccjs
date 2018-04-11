// let arr = [3, 0, 1]
let arr = readline().split(' ')
arr = arr.map(function (item) {
    return parseInt(item)
})
// let n = 3
let n = arr.unshift()
let res
for (let i=0;i<n;i++) {
    if (arr.indexOf(i) === -1) {
        res = i
        break
    }
}
// console.log(res)
print(res)