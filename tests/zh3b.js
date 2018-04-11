function DB(arr) {
    let maximum = 1000
    for (let i=1; i<=maximum; i*=2) {
        for (let j=1; i*j<maximum; j*=3) {
            for (let k=1; i*j*k<maximum; k*=5) {
                arr.push(i*j*k)
            }
        }
    }
    return arr
}

const arr = []
DB(arr)
arr.sort(function (a, b) {
    return a - b
})
console.log(arr)
