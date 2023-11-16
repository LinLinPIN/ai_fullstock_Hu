// function foo(){}
// var foo=function(){}
var obj={
    a:1,
}
// var foo=()=>{
// console.log(this.a);// 箭头函数里面没有this，这个this属于箭头函数外部
// }
// foo.call(obj)

// var bar=function(){
//     console.log(this.a);
// }
// bar.call(obj)

function foo(){
    var bar =()=>{
        var baz=()=>{
            console.log(this);
        }
    }
    bar()
}
foo.call(obj)