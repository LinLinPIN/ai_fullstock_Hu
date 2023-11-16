function foo(x,y){
    console.log(this.a,x+y);
}
var obj={
    a:1,
}

foo.call(obj,4,5)//call为函数体设计的函数
foo.apply(obj,[4,5])
let bar=foo.bind(obj,4,5)//bind会返回一个函数体,需要二次调用
bar(4,5)// 两种传形参的方式都可