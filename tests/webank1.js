let n = readInt()
for (let i = 0; i<n;i++) {
   print(f(read_line()))
}
function f(str) {
    if (str.length <= 10) return str
    return str[0] + (str.length - 2) + str[str.length-1]
}

// let s1 = 'word'
// let s2 = 'localization'
// console.log(f(s1))
// console.log(f(s2))
