{
    console.log(`闭包绑定了上级变量，可访问、可重新赋值，类似于python闭包中加了nonlocal标识符的变量`)

    function outer() {
        let a = 'aa'
        return function (val) {
            console.log('a: ' + a)
            a = val
            console.log('a: ' + a)
        }
    }

    const f1 = outer()
    const f2 = outer()
    console.log('calling f1')
    f1('af1')
    console.log('calling f2')
    f2('af2')
}

{
    console.log(`原型链查找属性，只能访问（包括引用类型的更新操作），不能重新赋值，重新赋值会在实例上新建一个属性 覆盖上级的同名属性`)
    function A() {
    }
    A.prototype.a1 = 'a1'
    A.prototype.color = ['red', 'green']
    function AA() {
    }
    AA.prototype = new A()

    let aa = new AA()
    let a = new A()
    console.log('aa.a1 = ' + aa.a1 )
    aa.a1 = 'a2'
    aa.color.push('blue')
    console.log('aa.a1 = ' + aa.a1)
    console.log('a.a1 = ' + a.a1)
    console.log('aa.color = ' + aa.color)
    console.log('a.color = ' + a.color)

}
