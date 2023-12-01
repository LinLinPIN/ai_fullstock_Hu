// if(1){
//     console.log('hello');
// }

// let arr = [1,2,3,4]

// while(arr.length !== 0){
//     console.log(arr.pop());
// }

// 原始值转bool
console.log(Boolean());// false
console.log(Boolean('123'));// true
console.log(Boolean(''));// false
console.log(Boolean(0));// false
console.log(Boolean(false));// false
console.log(Boolean(undefined));// false
console.log(Boolean(null));// false
console.log(Boolean(NaN));// false

// 原始值转number
console.log(Number());// 0
console.log(Number(false));// 0
console.log(Number(true));// 1
console.log(Number("123"));// 123
console.log(Number("hello"));// NaN
console.log(Number(undefined));// NaN
console.log(Number(null));// 0


// 原始值转字符串
console.log(String());// ""
console.log(String(undefined));// "undefined"
console.log(String(null));// "null"
console.log(String(true));// "true"
console.log(String(false));// "false"
console.log(String(123));// "123"
console.log(String(NaN));// "NaN"



// 转对象
console.log(Object('hello'));// String{'hello'}
console.log(Object(123));// Number{123}
console.log(Object(null));// {}
console.log(Object(undefined));// {}
