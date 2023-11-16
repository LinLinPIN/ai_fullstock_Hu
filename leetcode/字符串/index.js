let str ='hello'
console.log(str[1]);
console.log(str.at(1));
const arr=str.split("").reverse().join("")// 切割方法，字符串转成数组
console.log(arr);

// split,join不影响原数组,reverse影响原数组