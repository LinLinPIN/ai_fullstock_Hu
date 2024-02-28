function foo() {
    let a = 1;
    let b = 2;
    function bar() {
        console.log(a);
    }
    return bar;
}

let baz = foo()

console.log(baz());

// 实现私有化变量
function Counter() {
    let count = 0;
    return {
        count: count++
    }
}