console.log(a)
var a=1

/*
等同
var a//声明提升
console.log(a)
a=1           
*/


foo()
function foo(){
    console.log(123)
}

let a='122'
console.log(a)//let在声明前无法使用，不会出现var声明提升

const a=1   //声明了一个常量
a='hello'//const声明的值无法修改
console.log(a)
