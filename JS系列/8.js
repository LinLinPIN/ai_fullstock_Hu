var obj = {
    a: 23,
    foo: foo
}
function foo() {
    console.log(this.a);
}

obj.foo()// 隐式绑定this指向前面那个对象