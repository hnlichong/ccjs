function gcd(  n,  m ){
    if( m === 0 ) return n;
    return gcd( m, n % m );
}

let n = 1000
// let n = parseInt(readline())
const arr= []
for (let i=1; i<=n;i++){
    arr.push(i)
}
let res= arr.reduce(function (accumulator, currentValue) {
    return  accumulator / gcd(accumulator, currentValue)* currentValue
},1)
res = res % 987654321
console.log(res)
// print(res)