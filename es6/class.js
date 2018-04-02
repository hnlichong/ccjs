// 使用class构造类实际上是使用原型链继承机制的语法糖
// 类的声明不会提升（hoisting)，如果你要使用某个 Class，那你必须在使用之前定义它，否则会抛出一个 ReferenceError 的错误
// 在类中定义函数不需要使用 function 关键词

class Polygon {
    constructor(width = 0, height = 0) {
        this.name = '实例属性 polygon.name: polygon'
        this.width = width
        this.height = height
        this.area = width * height
        console.log('Polygon instantiated')
    }
    sayName(){
        console.log('实例方法，polygon.sayName: ' + this.name)
    }
    static sayClassName() {
        console.log('静态方法(类方法)在类名上调用, Polygon.sayClassName: ' + Polygon.className)
    }
    // ES6 明确规定， Class 内部只有静态方法，没有静态属性; 静态属性定义在class外部，实例属性定义在constructor内部
    // ES7 的提案支持如下写法：
    // name = '实例属性 polygon.name: polygon'
    // static className = '静态属性（类属性）在类名上调用, Polygon.className: Polygon'
}
console.log('静态属性定义在class代码块外部')
Polygon.className = '静态属性 Polygon.className: Polygon'

let polygon = new Polygon(3, 4)
console.log(polygon.name)
console.log(Polygon.className)
polygon.sayName()
Polygon.sayClassName()
// console.log('polygon.className: ' + polygon.className)  // undefined
// polygon.sayClassName()   // Uncaught TypeError: polygon.sayClassName is not a function

/*
* 继承
*/
class Square extends Polygon {
    constructor(length) {
        super(length, length)
        this.name = 'square'
        console.log('Square instantiated')
    }
    sayName() {
        console.log('子类Square覆写父类中的sayName方法, name: ' + this.name)
    }
    sayName2(){
        console.log('子类方法sayName2:' + this.name)
    }
    sayName3(){
        console.log('子类用super.调用父类方法')
        super.sayName()
    }
}
let square = new Square(5)
console.log('square area: ' + square.area)
polygon.sayName()
square.sayName()
square.sayName2()
square.sayName3()


/*
* ES6中的class实际上是经典js中构造函数+原型链机制的语法糖
* */
console.log('ES5 构造函数+原型链实现类')
function Person(name, age) {
    // 实例属性
    this.name = name
    this.age = age
    // 不要在构造函数里面定义函数！
    // this.sayAge = function () {
    //     console.log('age: ' + this.age)
    // }
}
// 实例方法
Person.prototype.sayName = function () {
    console.log('Person.prototype.sayName: ' + this.name)
}
// 静态属性（类属性）
Person.className = 'Person'
// 静态方法（类方法）
Person.staticSayName = function () {
    console.log('Person.staticSayName: ' + this.className)
}
// 静态方法一般是工具函数，根据实际传入参数计算返回值,不出现this
Person.standardWeight = function (height) {
    return (height - 100) * Person.K
}
Person.K = 0.9

let person = new Person('lichong', 25)
person.sayName()  // lichong
// console.log('person.className: ' + person.className) // undefined
// person.staticSayName() //TypeError: person.staticSayName is not a function
console.log(Person.className)
Person.staticSayName() // Person
console.log(Person.standardWeight(174) + 'kg')
