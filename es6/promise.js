console.log(`
ES6的Promise对象代表了未来将要发生的事件，用来传递异步操作的消息。

Promise有三种状态：pending, fulfilled, rejected.
只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是 Promise 这个名字的由来，它的英语意思就是「承诺」，表示其他手段无法改变
一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise 对象的状态改变，只有两种可能：从 Pending 变为 Resolved 和从 Pending 变为 Rejected, 无法逆转。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果。就算改变已经发生了，你再对 Promise 对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。

有了 Promise 对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。此外，Promise 对象提供统一的接口，使得控制异步操作更加容易。
Promise 也有一些缺点。首先，无法取消 Promise，一旦新建它就会立即执行，无法中途取消。其次，如果不设置回调函数，Promise 内部抛出的错误，不会反应到外部。第三，当处于 Pending 状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。
`)
{
    const timeout = time => new Promise((resolve, reject) => {
        // pending
        if (time >= 10) { // condition
            setTimeout(()=>{
                resolve(`延时成功！此消息在${time}ms后显示出来`) // fulfilled, resolve(value)
            }, time)
        } else {
            reject(new Error('延时失败，延时时间不能小于10ms')) // rejected, reject(reason) reason一般是Error对象
        }
    })
    timeout(1)
        .then((value) => console.log(value))
        .catch((reason) => console.error(reason))

}

{
    console.log('then()返回原promise对象，then()中回调函数的返回值会作为value传入promise中的resolve')
    const hello = new Promise((resolve, reject) => {
        resolve('hello')
    })
    hello.then((str) => `${str} World`)
        .then((str) => `${str}!!!`)
        .then((str) => console.log(str)) // Hello World!!!

    console.log('如果resolve传入promise对象，则原promise会等待新promise状态变化后在再执行then')
    const p1 = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve()
        }, 1000)
    })
    const p2 = new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(p1)
        }, 10)
    })
    p1.then(()=>{
        console.log('p1 resolved')
    })
    p2.then(()=>{
        console.log('p2 resolved')
    })

    console.log('这种设计将"横向发展"的回调地狱改为"向下发展"的链式调用')
}

if (0) {
    console.log('setTimeout()实现')
    setTimeout(() => {
        console.log('1s')
        setTimeout(() => {
            console.log('2s')
            setTimeout(() => {
                console.log('3s')
            }, 1000)
        }, 1000)
    }, 1000)
}

{
    console.log('promise实现timeout耗时操作')
    const timeout = (time) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(time + 'ms passed')
            }, time)
        })
    }

    timeout(1000)
        .then((value) => {
            console.log(value)
            return timeout(2000)
        })
        .then((value) => {
            console.log(value)
            return timeout(3000)
        })
        .catch((reason) => console.error(reason))
    console.log('catch最后放一个即可，因为Promise 对象的错误具有"冒泡"性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个 catch 语句捕获。')
}

