((window) => {
    {
        console.log('ES5的函数中this指向函数调用者 即arguments.callee.caller')

        function Person() {
            this.myname = 'congcong'
            this.obj = {
                myname: 'objcongcong',
                sayName: function () {
                    return this.myname
                }
            }
        }

        var person = new Person()
        console.log(person.obj.sayName()) // objcongcong
        window.myname = 'windowname'
        window.sayName = person.obj.sayName
        console.log(window.sayName()) // windowname
    }

    {
        console.log('ES6箭头函数中this指向函数定义时的this')

        function Person2() {
            this.myname = 'congcong'
            this.obj = {
                myname: 'objcongcong',
                sayName: () => this.myname
            }
        }

        var person2 = new Person2()
        console.log(person2.obj.sayName()) // congcong
        window.myname = 'windowname'
        window.sayName2 = person2.obj.sayName
        console.log(window.sayName2()) // congcong
        /*
        * Person2中箭头函数相当于
        * sayName: function() {
        *   return this.name
        *   }.bind(this)
        *   */
    }

    {
        console.log('ES6支持函数参数默认值')
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
        console.log('ES5的arguments实现函数可变参数, arguments是一个类数组对象')
        let arrMap1 = function () {
            // 先把类数组对象arguments 转成数组
            var arr = Array.prototype.slice.call(arguments)
            var newArr = arr.map(function (item, index, array) {
                return item * 2
            })
            return newArr
        }
        console.log(arrMap1(2, 3, 4))

        console.log('ES6的Rest运算符...args实现函数可变参数, args是一个数组')
        let arrMap2 = (...args) => {
            // args已经是一个数组了
            return args.map(item => item * 2)
        }
        console.log(arrMap2(2, 3, 4))
    }
})(typeof window === 'undefined'? global:window)