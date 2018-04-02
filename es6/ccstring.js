{
    console.log('ES5 多行字符串需要用拼接+，变量也需要用拼接，没有字符串格式化功能')
    var name = 'Li Chong'
    var ss = 'Hello World! '
        + 'I\'m ' + name

    console.log(ss)

    console.log('ES6 多行字符串用反引号`, 字符串格式化用${}')
    const age = 25
    const template = `<div>age: ${age}
birthday: 1993.7.1</div>`
    console.log(template)

    console.log('代码折行是用反斜杠\\')


}