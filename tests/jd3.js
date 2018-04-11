let s = readline()
// let s = 'XXY'
let len = s.length
let ss = s.split('').reverse().join('')
if (ss === s) {
    print(len+2)
} else {
    print(len+1)
}
