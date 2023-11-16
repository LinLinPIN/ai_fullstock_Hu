// var a = 1
// function foo(){
//     console.log(this.a);
// }
// function bar(){// bar 的词法作用域是window
//     var a=2
//     foo()// foo是在bar的作用域中调用，但是此时必须要知道bar的词法作用域是谁
// }
// bar()


function foo(){
    function bar(){
        console.log(this);
    }
    function baz(){bar()}
    baz()
}
foo()