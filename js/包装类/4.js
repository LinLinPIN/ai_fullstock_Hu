// var obj={}
// obj.a=1
// var num=123
// num.a='hello'
// console.log(num.a);// undefined

var num=new Number(123);// 除null和undefined外都有构造函数
console.log(num);

var num=4
num.len=3
console.log(num.len);


// 考点
var arr=[1,2,3,4]
arr.length=2
console.log(arr);

var str='abcd'// 字符串身上没有length属性
str.length=2
// new String('abcd').length=2 delete
console.log(str.length);// new String('abcd').length
// length不是字符串的属性，是构造函数体内的属性
function String(s){
    this.length=0
}