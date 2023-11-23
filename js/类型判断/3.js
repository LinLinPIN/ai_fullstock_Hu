let obj = {}
let arr = [1,2,3]
let date = new Date()
let fn = function(){}

console.log(obj instanceof Object);
console.log(arr instanceof Object);// true
console.log(date instanceof Date);
console.log(fn instanceof Function);

// arr._proto_ === Array._prototype
// arr._proto_._proto_ === Object.prototype
// instanceof 通过判断隐式原型是不是等于显式原型,查找原型链并一直往下找