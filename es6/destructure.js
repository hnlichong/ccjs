{
    // let [username, password, email] = document.getElementById('myForm').getElementsByTagName('input')
    // let [n, k] = arr
    // let [col1, col2] = document.getElementsByTagName('.column')

    let person = {
        name: 'lichong',
        age: 25
    }
    let {name, age} = person
    console.log(`${name} --- ${age}`)

    // // ES5
    // var body = req.body, // body has username and password
    //     username = body.username,
    //     password = body.password;
    // // ES6
    // let {username, password} = req.body;
}