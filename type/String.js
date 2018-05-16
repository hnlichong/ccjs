
console.log('字符串拼接concat() | 加号操作符')
console.log('字符串切片slice(), substr(), substring()')
console.log('字符串分割 split()')
var s = 'red, green, blue, alpha'
console.log(s.split(','))

console.log('字符串访问charAt(0) | str[0]')
console.log('.box'.charAt(0))
console.log('.box'[0])

console.log('替换模式 replace')
// str.replace(regexp|substr, newSubstr|function)
var s = 'abc12345#$%^'
var ss = s.replace(/([^\d]*)(\d*)([^\w]*)/, function (match, p1, p2, p3, offest, str) {
    return [p1, p2, p3].join('-')
})
console.log(s)
console.log(ss)


console.log('匹配模式 match')
var s = '价格4500元，等级：2'
var matches = s.match(/[0-9]+/g)
console.log(matches)
console.log('等级：' + matches[1])
num = matches.join('')
console.log(num)
console.log(s.match(/[0-9]+/))
console.log(matches)

console.log('对应的正则表达式方法pat.exec()，但在全局匹配模式下不同')
// str.match() 与 pat.exec() 在单次匹配下相同,都是返回一个包含当前匹配项、捕获组、index, input的match对象
// 但在全局匹配模式下match返回的是所有匹配项的数组, 可以通过数组下标访问到每个匹配项但访问不到捕获组;
// 而exec仍然返回一个包含当前匹配项、捕获组、index, input的match对象，数组第0项是当前匹配项，之后的每一项都是匹配项中的捕获组，如需访问下一个匹配项，需再次执行exec(), 可用while循环获取所有匹配项
var pat = /\d+/g
var matches
while ( (matches = pat.exec(s)) !== null) {
    console.log('Found ' + matches[0] + ' in ' + matches.index + '. Next match executes at ' + pat.lastIndex)
}
// 注意在while循环中应该使用同一个pat实例，不能用字面量或构造函数方式去创建新的pat实例，所以要事先实例化一个pat对象缓存在一个变量
/*
* If your regular expression uses the "g" flag, you can use the exec() method multiple times to find successive matches in the same string. When you do so, the search starts at the substring of str specified by the regular expression's lastIndex property (test() will also advance the lastIndex property). Note: Do not place the regular expression literal (or RegExp constructor) within the while condition or it will create an infinite loop if there is a match due to the lastIndex property being reset upon each iteration. Also be sure that the global flag is set or a loop will occur here also.
* */
// 因此，在不需要捕获组的模式匹配中，使用str.match()更简便


console.log('查找模式 search, 支持正则')
var s = '价格4500元，等级：2'
console.log(s.search(4500)) // 2
console.log('查找到了则返回位置索引，否则-1，类似于indexOf方法')
console.log(s.search(3600)) // -1

console.log('对应的正则表达式方法是pat.test(), 返回值true of flase, 常用于if语句，验证字符串格式')
var s = '188-1783-01861'
var pat = /^\d{3}-\d{4}-\d{4}$/
if (!pat.test(s)) {
    console.log('cellphone format wrong!')
}

console.log('查找位置 indexOf, 支持指定起始位置')
console.log('Hello World!'.indexOf('o', 5))

console.log('修剪空格 trim(), IE9+')
console.log('   Hellow World!    '.trim())

console.log('应用：提取字符串中的数字, 思路：把字符串中的非数字替换成空字符')
var s = '价格4500元，等级：2'
var num = s.replace(/[^0-9]/gi, '')
console.log(num)

console.log('字符串反转')
var s = 'abcdef'
console.log(s)
console.log(s.split('').reverse().join(''))


