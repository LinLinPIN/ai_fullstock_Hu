var a=1
a='hello'
function foo(){
    var a=2
    function bar(){
        console.log(a)
    }
    bar()
}

foo()
