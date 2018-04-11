//for循环求最小公倍数
let n = parseInt(readline())
// let n = 3
let res = n
for (let i=n; i>=1;i--){
    let j = res
    while ( j<= res * i) {
        if (j % res === 0 && j % i === 0) {
            res = j
            break
        }
        j ++
    }
}
res %= 987654321
// console.log(res)
print(res)