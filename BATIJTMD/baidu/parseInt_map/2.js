[1,2,3].forEach((item) =>{
    console.log(item);
})

// console.log([1,2,3].map((item) => item*item ))
// 遍历 iterator
// callback 第一个参数
// 执行的时候，默认传给他的第一个参数是数组遍历的当前项
console.log([1,2,3].map(parseInt))
console.log(parseInt([1]));
