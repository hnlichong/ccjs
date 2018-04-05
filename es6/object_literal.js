{
    console.log('对象词法扩展，对象字面量简写法')
    let a = 'aa',
        b = 'bb',
        c = 'cc'
    let obj = {
        // 简写对象属性
        a, // a: a,
        b, // b: b,
        c, // c: c,
        // 简写对象方法
        getA () {
            return this.a
        }
    }
    console.log(obj)
    console.log(obj.a)
    console.log(obj.getA())
}