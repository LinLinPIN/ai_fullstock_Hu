const arr = ['a', 'b', 'c', 'd', 'e', 'f']

// const arr2 = arr.splice(0, 2)// 第二个参数是有几个
const arr3 = arr.slice(0, 2)// 左闭右开区间,第二个参数是下标
console.log(arr);
// console.log(arr2);// a,b
console.log(arr3);// a,b