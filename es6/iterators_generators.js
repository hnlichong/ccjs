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
        console.log(next)
        if (next.done) break
    }
}

{
    console.log(`for..of用于遍历一个迭代器`)
    console.log('数组可迭代')
    let arr = ['a', 'b', 'c']
    for (let item of arr) {
        console.log(item)
    }
    console.log('对象不可迭代')
    // let obj = {a: 'aa', b:'bb'}
    // for (let value of obj) { //TypeError: obj is not iterable
    //     console.log(value)
    // }
    console.log('字符串可迭代')
    let str = 'abcd'
    for (let c of str) {
        console.log(c)
    }

    console.log(`for..in用于遍历属性`)
}

{
    console.log('生成器Generators返回一个迭代器实例')
    function *infiniteNumbers() {
        let n =1
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
