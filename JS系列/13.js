var obj = {
    name: 'tom'
}

function foo(x, y) {
    console.log(this.name);
    return x + y
}

foo.myCall(obj, 1, 2)

Function.prototype.myCall = function () {
    // 让obj调用foo，触发隐式绑定
    // this指向foo
    // 优化： 如果没有传参默认绑定到window
    // 使用symbol包裹fn
    arguments[0].fn = this
    let res = arguments[0].fn(...[...arguments].slice(1))
    delete arguments[0].fn// 移除fn属性
    return res
}