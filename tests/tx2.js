// while (line = readline()) {
//     var lines = line.split(' ')
//     var N = parseInt(lines[0])
//     var M = parseInt(lines[1])
var N = 3, M=7
    var K1 = Math.pow(2, N - 1)
    var y = Math.ceil(M / (2 - 1 / K1))
    var sum = 2 * y - y / K1
    var res = sum > M ? (y - 1) : y
    console.log(res)
    // print(res)
// }