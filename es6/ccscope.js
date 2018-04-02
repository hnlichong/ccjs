console.log('var声明的变量具有变量声明提升特性，在解释器执行代码之前会被提升到函数顶部或全局作用域顶部')
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
console.log('这样容易导致多个闭包函数引用同一个父级变量问题')
var fns = []
for (var i = 0; i< 3; i++) {
    fns.push(function () {
        console.log(i)
    })
}
fns.forEach(function (item) {
    item()
})

// ES5的解决方法--再包一层函数
console.log('ES5的解决方法--再包一层函数')
var fns2= []
for (var i = 0; i<3; i++ ) {
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

// ES6 let方式，只作用于块级作用域（{}内部：函数内部，代码块内部）
console.log('ES6 let方式声明变量，只作用于块级作用域（{}内部：函数内部，代码块内部）')
var fns3 = []
for (let i = 0; i<3; i++) {
   fns3.push(function () {
       console.log(i)
   })
}
fns3.forEach(function (item) {
    item()
})

console.log('函数声明也有提升特性hoisting')
function aa() {
    return 1
}

console.log(aa())
function aa() {
    return 2
}
console.log(aa())

console.log('块级作用域{}能圈定范围，能限定函数声明提升的作用域')
function bb() {
    return 3
}
console.log(bb())
{
    console.log(bb())
    function bb() {
        return 4
    }
}
console.log(bb())

{
    console.log('let只作用于块级作用域{}内，外部失效')
    let calAmount = hot => {
        if (hot) {
           let amount = 100
        }
        {
            let amount = 10
        }
        return amount
    }
    // console.log(calAmount(true)) //Uncaught ReferenceError: amount is not defined
    try {
        calAmount(true)
    } catch (e) {
        console.log(e)
    }

    let calAmount2 = hot => {
        var amount = 1
        if (hot) {
            let amount = 100
        }
        {
            let amount = 10
        }
        return amount
    }
    console.log(calAmount2(true))

    let calAmount3 = hot => {
        let amount = 1
        if (hot) {
            amount = 100
        }
        {
            let amount = 10
        }
        return amount
    }
    console.log(calAmount3(true))
}
{
    console.log('const常量也是只作用于块级作用域{}，外部失效')
    function calculateTotalAmount (vip) {
        const amount = 0;
        if (vip) {
            const amount = 1;
        }
        { // more crazy blocks!
            const amount = 100 ;
            {
                const amount = 1000;
            }
        }
        return amount;
    }
    // 这个函数不断修改const常量，但并不会报错，就是因为每次声明const都是作用在一个独立的块级作用域
    console.log(calculateTotalAmount(true));
}



