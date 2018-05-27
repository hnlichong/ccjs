/*
* https://gaohaoyang.github.io/2016/10/16/shuffle-algorithm/
* */
function *shuffle(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        let j = Math.floor(Math.random() * i);
        [arr[j], arr[i]] = [arr[i], arr[j]]
        yield arr[i]
    }
}

function *limit(iterator, max = 1) {
    for (let i = 0; i < max; i++) {
        const next = iterator.next()
        if (next.done) break
        yield next.value
    }
}

const cards = Array.from({length: 52}, (v, k) => k + 1)
// console.log(cards)
const pick10 = [...limit(shuffle(cards), 10)]
console.log(pick10)
