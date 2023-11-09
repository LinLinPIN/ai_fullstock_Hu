var a=1;
function foo(a){
    function a(){return 1}
    console.log(a)
    var a=2
    function b(){}
    console.log(b)
    var b=a;
    console.log(a);
}
foo(3)