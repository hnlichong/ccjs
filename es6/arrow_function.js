((window) => {
    {
        console.log('function函数中this具有动态上下文，指向函数调用者的作用域，可以根据其调用方式动态的改变上下文')

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
        console.log('箭头函数的this是固定上下文，指向函数定义时绑定(bind)的外围作用域，不再改变')

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
        console.log(`
        箭头函数书写简洁，但适合使用箭头函数的情形只有一种：
        无需动态上下文、无多层嵌套的纯函数场景，例如用在map、reduce、filter的回调函数定义中。
        `)
        // https://segmentfault.com/a/1190000007074846
        console.log('不要滥用箭头函数:')
        console.log('1.在对象上定义函数')
        const obj = {
            that: this, // obj对象中没有this，因此this继承自外部作用域：Window
            pName: 'congcong',
            // 箭头函数 不行！
            getPName: () => {
                console.log('this:', this) // Window，同样继承自外部作用域
                return this.pName  // undefined
            },
            // function函数
            getPName2: function () {
                console.log('this:', this)  // obj，指向调用者的作用域
                return this.pName // congcong
            },
            // 对象字面量简记法 推荐！
            getPname3() {
                console.log('this:', this)  // obj，指向调用者的作用域
                return this.pName // congcong
            }
        }
        console.log(obj.that)
        console.log('getPName():', obj.getPName())
        console.log('getPName2():', obj.getPName2())
        console.log('getPName3():', obj.getPname3())
    }

    {
        console.log('2.在原型上定义函数')
        {
            function Person(pName) {
                this.pName = pName;
            }

            Person.prototype.sayName = () => {
                console.log(this === window); // => true
                return this.pName;
            }

            var person = new Person('wdg');

            person.sayName(); // => undefined
        }
        {
            function Person (pName) {
                this.pName = pName;
            }

            Person.prototype.sayName = function () {
                console.log(this === person); // => true
                return this.pName;
            }

            var person = new Person('wdg');

            person.sayName(); // => wdg
        }


    }

    if (0) {
        console.log('3.动态上下文中的回调函数')
        var button = document.getElementById('myButton');
        button.addEventListener('click', function() {
            console.log(this === button); // => true
            this.innerHTML = 'Clicked button';
        });

        var button = document.getElementById('myButton');
        button.addEventListener('click', () => {
            console.log(this === window); // => true
            this.innerHTML = 'Clicked button';
        });
    }

    if (0) {
        console.log('在构造函数中，this指向新创建的对象实例')
        // this instanceOf MyFunction === true

        console.log('4.构造函数无法使用箭头函数，因为箭头函数在创建时this对象就绑定了，更不会指向对象实例。')
        var Person = (name) => {
            this.name = name;
        }

        // Uncaught TypeError: Person is not a constructor
        var person = new Person('wdg');
    }

    {
        console.log('5.多层嵌套的函数中使用=>不易看清返回值')
        {
            let multiply = (a, b) => b === undefined ? b => a * b : a * b;

            let double = multiply(2);

            double(3); // => 6

            multiply(2, 3); // =>6
        }
        {
            function multiply(a, b) {
                if (b === undefined) {
                    return function (b) {
                        return a * b;
                    }
                }
                return a * b;
            }

            let double = multiply(2);

            double(3); // => 6
            multiply(2, 3) // => 6
        }
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
        const required = ()=> {throw new Error('Missing parameter')}
        const sum = (a = required(), b = 3) => a + b
        console.log(sum(2, 3))
        // console.log(sum())
    }

    {
        console.log('function函数的arguments实现函数可变参数, arguments是一个类数组对象')
        let arrMap1 = function () {
            // 先把类数组对象arguments 转成数组
            var arr = Array.prototype.slice.call(arguments)
            var newArr = arr.map(function (item, index, array) {
                return item * 2
            })
            return newArr
        }
        console.log(arrMap1(2, 3, 4))

        console.log('箭头函数没有arguments，使用Rest运算符...args实现函数可变参数, args是一个数组')
        let arrMap2 = (...args) => {
            // args已经是一个数组了
            return args.map(item => item * 2)
        }
        console.log(arrMap2(2, 3, 4))
    }
})(typeof window === 'undefined'? global:window)