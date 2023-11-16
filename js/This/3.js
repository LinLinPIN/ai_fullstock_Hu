var obj={
    a:1,
    foo:foo
}
function foo(){
    console.log(this.a);
}
var obj2={
    a:2,
    obj:obj
}
obj2.obj.foo()