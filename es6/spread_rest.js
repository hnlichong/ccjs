console.log(`Spread/Reset Operator ..., 具体是Spread or Rest需要看上下文语境`)
{
    console.log(`当被用于迭代器中时，它是Spread操作符, 表示把数组中的元素展开`)
    let arr1 = [1,2]
    let arr2 = [3,4]
    let arr3 = [5, ...arr1,6,...arr2, 7]
    console.log(`arr3: ${arr3}`)
}

{
    console.log(`当被用于函数参数时，是一个Rest操作符，表示将剩下的元素转为数组(或其他一种迭代器)`)
    let sum = (...args) => args.reduce((accumulator, currentValue) => accumulator + currentValue)
    console.log(`sum(1,2,3) = ${sum(1, 2, 3)}`)
}
{
    console.log('ES5合并数组arr.concat()')
    let arr1 = [4, 6]
    console.log(arr1.concat(8, [1, 3]))

    console.log('Spread操作符实现合并数组')
    let arr2 = [1, 2, 3, 4, 5]
    let arr3 = [77, 88, ...arr1, 99, ...arr2]
    console.log(arr3)
}
{
    console.log('扩展对象Object.assign()')
    let obj = {a:'aa', mya:'mya'}
    let obj2 = Object.assign({}, obj, {a:'aaa', b:'bb', c: 'cc'})
    console.log(obj2)

    console.log('Spread操作符扩展对象')
    let obj3 = {
        ...obj,
        d: 'dd',
        e: 'ee',
        a: 'aaa'
    }
    console.log(obj3)
}

{
    console.log('拷贝数组,一层拷贝')
    const arr = [1,2]
    const arr2 = [...arr]
    arr2.push(3)
    console.log(arr)
    console.log(arr2)

    console.log('拷贝对象,一层拷贝')
    const obj = {arr, arr2}
    const obj2 = {...obj}
    obj2.a = 'aa'
    obj2.arr2.push(4)
    console.log(obj)
    console.log(obj2)
}