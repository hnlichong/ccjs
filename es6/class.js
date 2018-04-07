{
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

        sayName() {
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

        sayName2() {
            console.log('子类方法sayName2:' + this.name)
        }

        sayName3() {
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

}


{
    console.log('原型链继承中子类可以访问（get,包括调用引用类型的方法）父类实例中的属性，因为子类的原型对象实际就是父类的一个实例，但是无法修改子类原型对象中的这个属性，任何属性的创建和修改(set)都是作用在子类实例中的，并且对子类原型对象的属性具有"屏蔽"作用中')
    // 对于引用类型，调用方法只是修改对象内容，并没有改变引用的对象，所以仍然算作访问(get)
    // 创建一个新的对象或者改变变量引用到了一个新的对象才算作set
    function A() {
        this.aprop = 1
        this.aarr = ['red', 'green']
    }

    function B() {
    }

    B.prototype = new A()
    var b1 = new B()
    var b2 = new B()
    b1.aprop
    b1.aprop = 2
    console.log('这个属性的创建实际是发生在实例b1身上，屏蔽了B prototype中的同名属性aprop')
    b1.aprop
    b2.aprop

    b1.aarr
    b2.aarr
    b1.aarr.push('blue')
    b1.aarr
    b2.aarr

    b1.aarr = ['apple', 'orange']
    b1.aarr
    b2.aarr
}

{
    /*
    * ES6中的class实际上是经典js中构造函数+原型链的组合继承方式的语法糖
    * */
    console.log('ES5用构造函数+原型链的组合继承方式实现类')

    function Person(name, age) {
        // 实例属性
        this.name = name
        this.age = age
        // 不要在构造函数里面定义函数, 因为函数是复用的，就是要拿来共享的！
        // this.sayAge = function () {
        //     console.log('age: ' + this.age)
        // }
    }

    // 实例方法
    Person.prototype.getName = function () {
        return this.name
    }
    Person.prototype.getAge = function () {
        return this.age
    }

    function Student(name, age, GPA) {
        Person.call(this, name, age)
        this.GPA = GPA
    }

    Student.prototype = new Person()
    Student.prototype.constructor = Student
    Student.prototype.getGPA = function () {
        return this.GPA
    }

    function Teacher(name, age, salary) {
        Person.call(this, name, age)
        console.log('实例属性定义在构造函数中')
        // 实例属性
        this.salary = salary
    }

    console.log('类属性和类方法定义在构造函数对象中')
    // 静态属性（类属性）
    Teacher.K = 0.9
    // 静态方法（类方法）一般是工具函数，根据实际传入参数计算返回值,不会用到this
    // 类属性和类方法都需要用类名直接访问，用实例访问不到
    Teacher.standardWeight = function (height) {
        return (height - 100) * Teacher.K
    }

    Teacher.prototype = new Person()
    Teacher.prototype.constructor = Teacher
    console.log('需要共享的属性和方法定义在prototype对象中')
    // 共享属性
    Teacher.prototype.baseSalary = 10000
    // 实例方法（共享方法）
    Teacher.prototype.getSalary = function () {
        return this.salary
    }


    let person1 = new Person('person1', 23)
    let student1 = new Student('student1', 25, 3.7)
    let teacher1 = new Teacher('teacher1', 35, 18000)
    console.log(person1.getName())
    console.log(student1.getName())
    console.log(student1.getGPA())
    console.log(teacher1.getSalary())
    console.log(Teacher.standardWeight(174) + 'kg')
    console.log(Teacher.K)
    console.log(teacher1.K) // undefined, 实例访问不到类属性
}