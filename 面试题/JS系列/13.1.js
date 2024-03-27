var obj = {
    name: 'tom'
}

function foo(x, y) {
    console.log(this.name);
    return x + y
}

let bar = foo.myBind(obj, 1, 2)

Function.prototype.myBind = function () {
    // arguments[0]    [...arguments].slice(1)
    let obj = arguments[0]
    let args = [...arguments].slice(1)
    let that = this
    const back = function (...arg) {
        // 让this的指向指到obj
        // back 有没有被new
        if (this instanceof back) {
            // 让new作用于that身上
            return new that(...args, ...arg)
        }
        return that.call(obj, ...[...args, ...arg])

    }

    return back
}