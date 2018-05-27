let s1 = '5 3',
    s2 = '1 4 2 3 5'
let [n, m] = s1.split(' ').map(item => parseInt(item)),
    arr = s2.split(' ').map(item=>parseInt(item))
// let n =5,
//     m=3,
//     arr = [1,4,2,3,5],
let aver = arr.reduce((acc, item) => acc + item) / m,
    segNum = 0,
    segSum = 0,
    lastSegSum = 0,
    segPos = 0,
    segPosArr = [],
    maxSeg = 0
for (let i = 0, len = arr.length; i < len; i++) {
    segSum += arr[i]
    if (segSum <= aver) continue
    segSum -= arr[i]
    if (lastSegSum + segNum < segSum + segNum) {
        // choose s1
        // lastSegSum             | segSum
        //              segNum    |
        lastSegSum += segNum
        segPosArr.push(segPos + 1)
        maxSeg = maxSeg < lastSegSum ? lastSegSum : maxSeg
    } else {
        // choose s2
        // lastSegSum |         segSum
        //            | segNum
        segSum += segNum
        segPosArr.push(segPos)
        maxSeg = maxSeg < segSum ? segSum : maxSeg
    }
    lastSegSum = segSum
    segNum = arr[i]
    segPos = i
    segSum = 0
}
segPosArr.push(segPos)
segPosArr.shift()
console.log('maxSeg: ' + maxSeg)
console.log(segPosArr)
// print(maxSeg)