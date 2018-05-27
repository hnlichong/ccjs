
{
    console.log('创建数组')
    /*
    * new Array()
    * new Array().fill()
    * Array.from(arrayLike[, mapFn[, thisArg]])
    * Array.of()
    * */

    // new Array()不太好：无法创建一个元素的数组; 无法初始化
    new Array(52) // 创建长度为52的数组[empty × 52]，每个元素都是空元素
    new Array(52, 53) // 创建元素为52, 53的数组

    // new Array().fill() 初始化数组
    new Array(52).fill(undefined) // 创建包含52个undefined元素的数组

/*    Array.from(arrayLike[, mapFn[, thisArg]]) 优点：
    1.can create an array from an array-like object (objects with a length property and indexed elements, such as NodeList and function arguments) or iterable objects (objects where you can get its elements, such as Map and Set).
    2.map function
    */
    Array.from({length:52})
    Array.from({length:52}, (item,index)=>index+1) // [1,2,...,51,52]


    // Array.of(element0[, element1[, ...[, elementN]]])相对于new Array()的好处是可以创建一个元素的数组
    // Elements of which to create the array.
    // 由什么组成的数组
    Array.of(10)
    Array.of(10, 9, 8)

}
{
    console.log('检测数组Array.isArray(), IE9+')
    let arr = [3, 4, 2, 'a']
    console.log(Array.isArray(arr))
    console.log(Array.isArray({}))
}

{
    console.log('数组拼接splice(), 先删除再插入，改变数组本身')
    // type.splice(start[, deleteCount[, insertItem1[, item2[, ...]]]])
    let arr = [3, 4, 2, 'a']
    console.log(arr)
    //1。删除 (从index为2起删除1个元素，即删除arr[2])
    arr.splice(2, 1)
    console.log(arr)
    //2. 插入
    arr.splice(1, 0, 'f', 23, 12)
    //3. 替换(先删除后插入)
    arr.splice(1, 3, 'd', '7')
    console.log(arr)
}

{
    let arr = [1,2,3,4,5]
    console.log('数组切片方法slice()，不改变数组本身')
    let arr2 = arr.slice(1, 3)
    console.log(arr)
    console.log(arr2)
    // 相当于 str.substring()

    console.log('数组合并方法concat()，不改变数组本身')
    let a1 = [2, 3]
    let a2 = [5, 6, 1]
    console.log(a1 + a2)
    // 加号操作符将变量类型自动转化成字符串，于是这样表示的是字符串相加,结果为 '2, 35, 6, 1'
    //数组合并应该用 concat, 不能用加号操作符
    let a3 = a1.concat(a2)
    console.log(a3)
}
{
    console.log('数组查找方法indexOf(), 严格等于，传入目标元素，返回元素位置，IE9+')
    console.log(['a b', 'b c'].indexOf('a b')) // 0
    console.log(['a b', 'b c'].indexOf('c d')) // -1
}
{
    console.log('删除数组的某个元素，会改变数组本身，一般先拷贝再操作')
    const arr = ['aa','3', 3, 'aa', 'ca']
    console.log(arr)
    const aa = [...arr]
    aa.splice(aa.indexOf(3), 1)
    console.log(aa)
}
{
    console.log('迭代方法，均不改变数组本身')
    let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1]
    console.log('arr: ' + arr)
    // forEach 不常用, 对每一项都调用函数处理，无返回值，不支持continue, break
    arr.forEach(function (item, index, array) {
        // if (item === 2) {
        //     continue
        // }
        console.log('item: ' + item + ', index: ' + index)
        //  缺点：arr.forEach() 不支持continue, break
        // 只有在 loop statement 中才能使用 continue, break
    })

    // map 对每一项进行加工，返回一个新数组
    let res = arr.map(function (item, index, array) {
        return 'id' + item * 2
    })
    console.log('map res: ' + res)

    // filter 过滤满足条件的项
    res = arr.filter(function (item, index, array) {
        return item > 2
    })
    console.log('filter res: ' + res)

    // every 是否每一项都满足条件
    res = arr.every(function (item, index, array) {
        return item > 2
    })
    console.log('every > 2: ' + res)

    // some 是否存在某些项满足条件
    res = arr.some(function (item, index, array) {
        return item > 2
    })
    console.log('some > 2: ' + res)
}

{
    console.log('拷贝数组concat(), slice(), 一层拷贝')
    let a1 = [3, 1, 2]
    let a2 = a1.slice()
    let a3 = a1.concat()
    a2.push(22)
    a3.push(33)
    console.log(a1 + '')
    console.log(a2.toString())
    console.log(a3.toString())
}

{
    console.log('数组重排序方法reverse(), sort(), 会改变数组本身，因此一般先拷贝再对备份进行排序')
    let a1 = [1, 7, 8, 3, 0, 1, 8, 6]
    console.log(a1 + '')
    let aa = [...a1].reverse()
    console.log(aa + '')
    // 升序
    let bb = [...a1].sort((a,b)=> a- b)
    // 降序
    let cc = [...a1].sort((a,b)=> b-a)
    console.log(bb + '')
    console.log(cc + '')
}

{
    console.log(`归并方法reduce`)
    console.log(`数组扁平化 Array Flatten`)
    let arr = [[1, 2], [3, 4], [5, 6, 7]]
    console.log(arr)
    let arr2 = arr.reduce((accumulator, currentValue) => accumulator.concat(currentValue), [])
    console.log(arr2)

    console.log(`数组求和`)
    let res = arr2.reduce((accumulator, currentValue) => accumulator + currentValue)
    console.log(res)
}
/*
ES6新增的数组方法
 */
{
    console.log('查找方法find，传入回调函数，返回找到的元素')
    var array1 = [5, 12, 8, 130, 44];

    var found = array1.find(function(element) {
        return element > 10;
    });

    console.log(found);
    // Array.some() 返回true or false
    // Array.findIndex() 返回元素位置
}


