// let s = 'HHTHHH'
// let s = 'HTTHH'
// let s = 'HTTTH'
// let s = 'HTT'
// let s = 'HTHTT'
let s = readline()
let res = 0
let delta1, delta2
for (let i=1, len=s.length; i<len;i++) {
    if (s[i] !== s[i-1]) {
        res ++
        if (delta1 === undefined) {
            delta1 = i
        } else if (delta2 === undefined){
            delta2 = i
        } else {
            if ((delta2 - delta1) > 1) {
                res += 2
            } else {
                res += 1
            }
            delta1 = delta2 = undefined
        }
    }
}
if (delta1 !== undefined) {
    if (delta2 !== undefined) {
        if ((delta2 -delta1) > 1) {
            res +=2
        }else{
            res ++
        }
    } else {
        res ++
    }
}

// console.log(res)
print(res)