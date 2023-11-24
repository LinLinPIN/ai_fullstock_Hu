let a = {
    name:'雨程'
}
let b = Object.create(a)// 拷贝到了a身上的属性
a.name = '涛哥'
console.log(b.name);//输出涛哥 浅拷贝

 
let a = {
    name:'雨程',
    like:{
        n:'coding'
    }
}
// let b = Object.assign({},a)// 对象拼接，可以传n个值，全部拼接到第一个对象上
a.name = '涛哥'
a.like.n = 'running'

console.log(b);// 输出雨程 running
// 拷贝时拷贝了a.like 的引用地址

let arr = [1,2,3,{n:10}]
// let newArr = [].concat(arr)
// arr.push(4)
// arr[0] = 10
// arr[3].n = 100
// console.log(newArr);

// let newArr = [...arr]
// arr[3].n = 1000
// console.log(newArr);

let newArr = arr.toReversed().reverse

