function getIntersection(...args) {
    // your code here
    let ret = []
    let min=-Infinity,
        max=Infinity
    for (let i=0,len=args.length;i<len;i++) {
        let arr = args[i]
        if (!Array.isArray(arr)) return null
        if (typeof arr[0] !== 'number') return null
        if (typeof arr[1] !== 'number') return null
        if (arr[0]<arr[1]) {
            if (arr[0]>min) {
                min = arr[0]
            }
            if (arr[1]<max) {
                max = arr[1]
            }
        } else {
            if (arr[1]>min) {
                min = arr[1]
            }
            if (arr[0]<max) {
                max = arr[0]
            }
        }
    }
    if (min>max) return null
    return [min, max]
}

let r1 = getIntersection([1, 4], [3, 5]); // return [ 3, 4 ]
let r2 = getIntersection([5, 2], [4, 9], [3, 6]); // return [ 4, 5 ]
let r3 = getIntersection([1, 7], [8, 9]); // return null
let r4 = getIntersection(['x', 7], [4, 9]); // return null
let r5 = getIntersection([1, 2]); // return [ 1, 2 ]
let r6 = getIntersection([1, 2], [2, 3]); // return [ 2, 2 ]
console.log(r1,r2,r3,r4,r5,r6)