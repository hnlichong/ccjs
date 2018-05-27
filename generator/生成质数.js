function* primeNumbers() {
    yield 2
    const pn = [2]
    for (let i = 3; i < Infinity; i++) {
        for (let j = 0; j < pn.length; j++) {
            if (i % pn[j] === 0) break
            if (i < pn[j] ** 2) {
                yield i
                pn.push(i)
                break
            }
        }
    }
}

function* limit(iterator, max = 1) {
    for (let i = 0; i < max; i++) {
        let next = iterator.next()
        if (next.done) break
        yield next.value
    }
}

let pn = [...limit(primeNumbers(), 10)]
console.log(pn)

