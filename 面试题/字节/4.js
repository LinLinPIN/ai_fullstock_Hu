Object.prototype[Symbol.iterator] = function () {
    return Object.keys(this)[Symbol.iterator]()
}


var [a, b] = { a: 1, b: 2 }// 解构等号右边会被迭代


console.log(a, b);