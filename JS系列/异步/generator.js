// function* foo() {// 生成器函数
//     yield 'a'
//     yield 'b'
//     yield 'c'
//     return 'ending'
// }

// let gen = foo()// 得到一个指向内部状态的指针对象

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());// { ending true}

// function* foo() {
//     var o = 1;
//     yield o++
//     yield o++
//     yield o++
// }

// let gen = foo()
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

function* foo() {
    var o = 1;
    var a = yield o++;
    console.log(a);
    var b = yield o++;
}

let gen = foo()
console.log(gen.next());