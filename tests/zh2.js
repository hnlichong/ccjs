// let x = parseInt(readline())
let x = 0
x = Math.abs(x)
let a = x
let res = 0
while (1) {
   if (a % 2 ===0) {
       a = a / 2
   } else {
       a = a - 1
   }
   res ++
    if (a === 0) break
}
// print(res)
console.log(res)
