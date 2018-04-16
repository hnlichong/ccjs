let f1 = function(arr1, arr2) {
    function ascending(a, b) {
        return a - b
    }
    function descending(a, b) {
        return b - a
    }
    arr1.sort(ascending)
    arr2.sort(descending)
    let sum = 0
    for (let i = 0, len = arr1.length; i < len; i++) {
        sum += arr1[i] * arr2[i]
    }

    return sum
}

let arr1 = [1,2,3,0],
    arr2 = [3,1,2,5]
console.log(f1(arr1, arr2))

