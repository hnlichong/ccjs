const Person = (function () {
    const privateData = new WeakMap()
    function Person(name, age) {
        privateData.set(this, {name:name, age:age})
    }
    Person.prototype.getName = function () {
        return privateData.get(this).name
    }
    return Person
})()

const person1 = new Person('lichong', 24)
console.log(person1.getName())
console.log(person1.name)
console.log(person1.privateData)
