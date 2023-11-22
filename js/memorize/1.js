function add(a,b){
    console.log([...arguments]);
    console.log(Array.prototype.join.call(arguments,'-'));
    // 转换成数组类型
    const arr = Array.from(arguments)
    console.log(Object.prototype.toSting.call(arr));
    // 参数数量 arguments
    console.log(a,b,arguments[0],arguments[1]);
    // console.log(arguments.join('--'));
    console.log(typeof(arguments),Object.prototype.toString.call(arguments));
    // var c
    if(arguments.length !=2){
        throw new Error('必须传递两个参数')
    }
    return a + b
}

try{
console.log(add(1,2));}
catch(e){
    console.log(e);
}

console.log('continue.....');