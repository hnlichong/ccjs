{
    /*
    * 迭代器允许每次访问数据集合的一个元素，当指针指向数据集合最后一个元素是，迭代器便会退出。它提供了 next() 函数来遍历一个序列，这个方法返回一个包含 done 和 value 属性的对象。
ES6 中可以通过 Symbol.iterator 给对象设置默认的遍历器，无论什么时候对象需要被遍历，执行它的 @@iterator 方法便可以返回一个用于获取值的迭代器。
数组默认就是一个迭代器：*/
    console.log(`迭代器Iterators允许每次访问数据集合的一个元素，当指针指向数据集合最后一个元素是，迭代器便会退出。`)
    const arr = [11, 12, 13]
    const itr = arr[Symbol.iterator]() //返回数组的迭代器
    while (true) {
        let next = itr.next()
        console.log(next.value)
        if (next.done) break
    }
    const iterator2 = arr[Symbol.iterator]()
    console.log('使用展开符...可以拉取生成器的所有值')
    console.log([...iterator2])
}

{
    console.log(`for..of用于遍历一个迭代器`)
    console.log('数组可迭代')
    let arr = ['a', 'b', 'c']
    for (let item of arr) {
        console.log(item)
    }
    console.log('Object不可迭代')
    let obj = {a: 'aa', b: 'bb'}
    // for (let value of obj) { //TypeError: obj is not iterable
    //     console.log(value)
    // }
    console.log('字符串可迭代')
    let str = 'abcd'
    for (let c of str) {
        console.log(c)
    }

    console.log(`for..in遍历原型链上所有属性`)
    console.log(`for..of遍历自身可枚举属性`)
    // Object.entries(obj) 返回对象自身可枚举属性及属性值 [[key, value], [key, value], ...]
    // 类似的有Object.keys(obj), Object.values(obj)
    for (let [key, value] of Object.entries(obj)) {
        console.log(`key: ${key}, value: ${value}`)
    }
}

{
    console.log('生成器返回迭代器')

    function *infiniteNumbers() {
        let n = 1
        while (true) {
            yield n++
        }
    }

    let numbers = infiniteNumbers() // return an iterable object
    console.log(numbers.next())
    console.log(numbers.next())
    console.log(numbers.next())
    console.log('每调用一次next()才生成一个元素，不用担心会无限循环')
}
console.log('生成器指数序列')

/*因为阶乘序列中的每一项都跟上一项的有关，因此适合用生成器来实现，可以保持状态，减少计算次数*/
function *factorials() {
    let n = 1
    for (let i = 1; i < Infinity; i++) {
        yield n *= i
    }
}

function *limit(iterator, max = 1) {
    for (let i = 0; i < max; i++) {
        const item = iterator.next()
        if (!item.done) {
            yield item.value
        }
    }
}

const numbers = limit(factorials(), 10)
console.log([...numbers])