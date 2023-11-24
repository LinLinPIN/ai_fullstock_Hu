// let a = 1
// let b = a
// a = 2
// console.log(b);


let a = {
    age:18
}
let b = a
// a.age=19
// a = {
//     age:20
// }生成了一个新的对象并且将堆中的下标赋给a
console.log(b.age);