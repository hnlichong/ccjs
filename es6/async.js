console.log(`
async 表示这是一个async函数，await只能用在这个函数里面。
await 表示在这里等待promise返回结果了，再继续执行。
`)
if (1) {
    console.log('js实现sleep函数的最佳方式就是async操作符声明的异步函数')
    const sleep = (time) => new Promise((resolve, reject) => {
        if (time < 10) {
            reject(new Error('延时时间不能小于10ms'))
        } else {
            setTimeout(() => {
                resolve(`延时成功，此消息将在${time}ms后执行`)
            }, time)
        }
    })

    const start = async ()=>{
        console.log('start')
        await sleep(3000)
        console.log('end')
    }
    start()

    console.log('包含异步执行的函数（包含回调函数的函数）必须加async声明，才能保证函数体内正确的代码执行顺序')
    if (0) {
        console.log('反例:')
        const start1 = () => {
            console.log('start1')
            sleep(1000)
                .then((value) => console.log(value))
                .catch((reason) => console.error(reason))
            console.log('end1')
        }
        start1()
    }

    console.log('await等待promise函数的执行结果value or reason')
    const start2 = async () => {
        console.log('start2')
        try {
            let value = await sleep(3)
            console.log(value)
        } catch (ex) {
            console.error(ex)
        }
        console.log('end2')
    }
    start2()

    console.log('循环多个await')
    console.log('await操作符只能用在async函数的上下文(context)中')
    const iteStart = async () => {
        const arr = [2, 5, 7]
        // arr.forEach((item, index) => {
        //     console.log(`${index}s output item: ${item}`)
        //     await sleep(1000)  // SyntaxError: await is only valid in async function
        // })

        for (let item of arr) {
            console.log(`item: ${item}`)
            await sleep(1000)
        }
    }
    iteStart()

}

if (0) {
    console.log('附：js实现sleep的一般方式：空转CPU，不推荐')
    const sleep = (time) => {
        let startTime = Date.now()
        while (Date.now() - startTime < time);
    }
    console.log('start')
    sleep(2000)
    console.log('end')
}
