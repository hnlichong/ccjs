{
    console.log('应用在对象上')
    let person = {
        name: 'lichong',
        age: 25
    }
    // 同名键值对的简记法 {name, age} -> {name: name, age:age}
    let {name, age} = person
    console.log(`${name} --- ${age}`)
}

{
    console.log('应用在数组上')
    let [n, k] = [2, 3]
    console.log(`n: ${n}, k: ${k}`)
    let [first, ...rest] = [1, 2, 3, 4, 5]
    console.log(`first: ${first}, rest: ${rest}`)
    let [, , third] = [1, 2, 3]
    console.log(`third: ${third}`)
}

{
    console.log('应用在ajax请求的返回结果上')
    // // ES5
    // var body = req.body, // body has username and password
    //     username = body.username,
    //     password = body.password;
    // // ES6
    // let {username, password} = req.body;
}

{
    console.log('应用在HTMLCollcetion数组上')
    // let [username, password, email] = document.getElementById('myForm').getElementsByTagName('input')
    // let [n, k] = arr
    // let [col1, col2] = document.getElementsByTagName('.column')
}

{
    console.log('应用在多个返回值的函数上')

    function f1() {
        return [1, 2]
    }

    let [foo, bar] = f1()
    console.log(`foo: ${foo}, bar: ${bar}`)
}

{
    console.log('解构赋值可以提供默认值')
    let {msg = 'default msg', code = 0} = {code: 200}
    console.log(`msg: ${msg}, code: ${code}`)
}

{
    console.log('应用在函数参数上，解构赋值可以为配置对象数提供默认值')
    // 例如，重写jQuery的ajax函数，使用一个配置对象作为第二参数
    let ajax = (url, {
        method = 'get',
        async = true,
        cache = true,
        crossDomain = false,
        global = true,
        // 更多配置 ...
    }) => {
        // do somethin ...
    }
}



