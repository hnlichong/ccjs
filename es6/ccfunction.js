console.log('ES6之前，this 指向调用该函数的对象 即arguments.callee.caller')
function Person() {
    this.name = 'congcong'
    this.obj = {
        name: 'objcongcong',
        sayName: function () {
            return this.name
        }
    }
}
var person = new Person()
console.log(person.obj.sayName())
window.name = 'windowname'
window.sayName = person.obj.sayName
console.log(window.sayName())


console.log('箭头函数中this指向函数定义时的this')
function Person2() {
    this.name = 'congcong'
    this.obj = {
        name: 'objcongcong',
        sayName: () => this.name
    }
}
var person2 = new Person2()
console.log(person2.obj.sayName())
window.name = 'windowname'
window.sayName2 = person2.obj.sayName
console.log(window.sayName2())
/*
* Person2中箭头函数相当于
* sayName: function() {
*   return this.name
*   }.bind(this)
*   */

{
    console.log('ES6 支持函数默认值')
    // 箭头函数中 如果参数只有一个，可以省略(); 如果函数表达式只有一个，且作为返回值，可以省略{}
    let sum = (a, b = 3, c = 7) => a + b + c
    console.log(sum(1))
    console.log(sum(1, 0))
    // 在ES5中，函数默认值可以这样写 b = b || 3 但是对0就会出错, 只能这样写 if (b === undefined) { b = 0}
}
{
    console.log('函数默认值可以调用一个函数，用于检查必须参数')
    let checkMandatoryArgument = () => {
        throw new Error('Missing mandatory argument')
    }
    let sum = (a = checkMandatoryArgument(), b = 3, c = 7) => a + b + c
    console.log(sum(3))
    // console.log(sum())
}

{
    console.log('ES5 arguments 实现函数可变参数')
    let arrMap1 = function () {
        // 先把类数组对象arguments 转成数组
        var arr = Array.prototype.slice.call(arguments)
        var newArr = arr.map(function (item, index, array) {
            return item * 2
        })
        return newArr
    }
    console.log(arrMap1(2,3,4))

    console.log('ES6 展开运算符... 实现函数可变参数')
    let arrMap2 = (...a) => {
        // a已经是一个数组了
        return a.map(item => item * 2)
    }
    console.log(arrMap2(2, 3, 4))
}
{
    console.log('ES5 合并数组')
    let arr1 = [4, 6]
    console.log(arr1.concat(8, [1,3]))

    console.log('ES6 展开运算符... 实现合并数组')
    let arr2 = [1,2,3,4,5]
    let arr3 = [77,88, ...arr1, 99, ...arr2]
    console.log(arr3)
    console.log('展开运算符...可把数组转成元素，也可把多个元素转成数组')
}