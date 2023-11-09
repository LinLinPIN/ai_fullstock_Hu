function fn(a){
    console.log(a);//function a(){}
    var a=123;
    console.log(a);//123
    function a(){}//函数声明
    console.log(a)//123
    var b=function(){}//函数表达式 赋值语句
    console.log(b)//function(){}
    var d=a
    function d(){}
    console.log(d)//123
}
fn(1)

/* AO={
     a:undefined  1    function a(){}    123,
     b:undefined  ,
     d:undefined function d(){}   123,
    }
*/ 