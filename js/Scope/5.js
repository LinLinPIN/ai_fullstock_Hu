function foo(str){
    eval(str)//var b=2
    var a=1
    console.log(a,b)
}
foo('b=2')

var obj={
    a:1,
    b:2,
    c:3,
}
with(obj){
    a=2,
    b=3,
    c=4
}//批量修改obj内的属性



function foo(obj){
    with(obj){
        a=2
    }
}


var o1={a:3}
var o2={b:4}
foo(o1)
foo(o2)//传入的o2内没有a，则直接创建/或者修改一个全局变量a=2