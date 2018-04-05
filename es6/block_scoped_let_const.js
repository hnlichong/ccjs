{
    console.log('var声明的变量具有变量提升特性（变量声明提升），在解释器执行代码之前会被提升到函数顶部或全局作用域顶部')

    function vara(value) {
        if (value) {
            var a = 1
            console.log('a = ' + a)
        } else {
            console.log('a = ' + a)
        }
    }

    vara(1)
    vara(0)
}
{
    console.log('这样容易导致多个闭包函数引用同一个父级变量问题')
    var fns = []
    // 这里var变量i会被提升到函数顶部或全局作用域顶部，每次循环都是引用同一个变量i
    for (var i = 0; i < 3; i++) {
        fns.push(function () {
            console.log(i)
        })
    }
    fns.forEach(function (item) {
        item()
    })
}
{
    console.log('ES5的解决方法是再包一层函数')
    var fns2 = []
    for (var i = 0; i < 3; i++) {
        fns2.push((function (value) {
            // 此时value是这个函数中的变量,相当于在这里 var value = .., 每次循环i不同，传入参数value也不同
            return function () {
                // 子函数通过闭包特性 引用父函数中的变量
                console.log(value)
            }
        })(i))
    }
    fns2.forEach(function (item) {
        item()
    })
}
{
    console.log('var变量重复声明不会报错，意味着后声明的会把之前声明的给覆盖掉')
    var b = 4
    var b = 5
    console.log(b)
}
{
    console.log('ES6 let方式声明变量，只作用于块级作用域（{}内部：函数内部，代码块内部）,不具备变量提升特性')
    // 在同一块级作用域中，不能重复声明
    // let a = 3
    // let a = 4 // SyntaxError: Identifier 'a' has already been declared
    var fns3 = []
    // for的每一次循环都是一个新的block，都保存着一个独立的块级作用域变量i
    for (let i = 0; i < 3; i++) {
        fns3.push(function () {
            console.log(i)
        })
    }
    fns3.forEach(function (item) {
        item()
    })
}
{
    console.log('函数声明也有提升特性hoisting')
    function aa() {
        return 1
    }
    console.log(aa())
    function aa() {
        return 2
    }
    console.log(aa())
}

{
    console.log('块级作用域{}能圈定范围，能限定函数声明提升的作用域')

    function bb() {
        return 3
    }

    console.log(bb())
}
{
    console.log(bb())

    function bb() {
        return 4
    }
}
console.log(bb()) // 4

{
    console.log('ES5中常量的写法')
    var obj = {}
    Object.defineProperty(obj, "PI2", {
        value: 3.1415926,
        writable: false,
    })
    obj.PI2 = 3.14  // 没有报错，但是写入无效
    console.log(obj.PI2) // 3.1415926
}
{
    console.log('ES6的常量写法, 常量在声明时就必须被赋值，使用大写变量，如CAPITAL_CASING')
    const PI = 3.1415926
    console.log(PI)
// PI = 4  // TypeError: Assignment to constant variable.
    const arr = [1, 2, 3]
    arr[1] = 22  // ok
    console.log(arr) // [1, 22, 3]
    console.log('JavaScript中const限制的并非值不可变性；而是创建了不可变的引用(堆栈关系)，' +
        '即对于某个值（值，存储在堆中）的只读引用（指针，存储在栈中），并且禁止对该引用重新赋值（禁止改变这个指针的指向）')
    console.log('同样的，对于obj，const也无法防止对象的值发生改变')
    const obj2 = {a: 1, b: 2}
    obj2.a = 3
    obj2.cc = 44
    console.log(obj2)
}
