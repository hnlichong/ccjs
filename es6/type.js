{
    console.log('Symbol用于生成一个唯一的标识符')
    let sym = Symbol('mysymbol')
    console.log(`type: ${typeof sym}`)
}

{
    console.log(`Map类型是由键值对构成的哈希表，支持任何类型的key`)
    let map = new Map()
    console.log(`type: ${typeof map}`)
    map.set('str', 'string key')
    map.set([1,2], 'array key')
    map.set({a:'aa'}, 'object key')
    map.set(parseInt, 'function key')
    console.log(`map size: ${map.size}`)
    console.log(map)
    map.forEach((value, key, map) => {
        console.log(`value: ${value}, key: ${key}`)
    })
}

{
    console.log('Set 无重复元素的集合, 支持任何类型的元素')
    let set = new Set([1,1,2,3,3,3])
    console.log(`type: ${typeof set}`)
    set.add('string')
    set.add('string')
    set.add({a:'aa'})
    console.log(set.has('string'))
    console.log(set)

    console.log('可用forEach， for of 遍历Set对象, 操作方法跟数组类似')
    set.forEach((item) => console.log(`item: ${item}`))
    for (let item of set) {
        console.log(`item: ${item}`)
    }

}