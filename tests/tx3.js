var n = parseInt(readline());
var arr = readline().split(' ')
arr = arr.map(function (item, index, array) {
    return parseInt(item)
})
// var n = 3
// var arr = [2, 7, 4, 5]
// 降序
arr.sort(function (a, b) {
    return b - a
})
var res = arr.reduce(function (accumulator, currentValue, currentIndex) {
    return accumulator + Math.pow(-1, currentIndex) * currentValue
})
print(res)
// console.log(res)