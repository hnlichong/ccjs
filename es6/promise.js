{
    console.log('一个 Promise 是一个等待被异步执行的对象，当它执行完成后，其状态会变成 resolved 或者rejected。')
    let p = new Promise((resolve, reject) => {
        if (1/* condition */) {
            // fulfilled successfully
            resolve(/* value */)
        } else {
            // error, rejected
            reject(/* reason */)
        }
    })
    p.then(val => console.log('promise resolved', val),
        err => console.log('promise rejected', err))
}
{
    console.log('Returning a value from then callbacks will pass the value to the next then callback.')
    const hello = new Promise((resolve, reject) => {resolve('hello')})
    hello.then((str) => `${str} World`)
        .then((str) => `${str}!!!`)
        .then((str) => console.log(str)) // Hello World!!!
}

{
    console.log('setTimeout()实现')
    setTimeout(()=>{
        console.log('1s')
        setTimeout(()=>{
            console.log('2s')
            setTimeout(()=>{
                console.log('3s')
            }, 1000)
        }, 1000)
    }, 1000)
}
{
    console.log('promise实现')
    const p = new Promise((resolve, reject)=>{
        setTimeout(resolve, 1000)
        return this
    })
    p.then(()=>console.log('p1s'))
        .then(()=>console.log('p2s'))
        .then(()=>console.log('p3s'))
}