
Person.prototype.getName = function () {
    return this.name
}
function Person(name) {
    this.name = name
}
// let p = new Person('Tom')

function myNew(...args) {
    let obj = {}
    obj.__proto__ = args[0].prototype
    const res = args[0].apply(obj, args.slice(1))
    return (typeof res === 'Object' && res !== null) ? obj : res
}
let p = myNew(Person)
// 构造函数的this和构造函数原型上的this都指向实例对象