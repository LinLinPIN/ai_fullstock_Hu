function add(a,b){
    if(arguments.length !== 2){
        throw new Error('传递的参数有误')
    }
    if(typeof b !== 'number' || typeof a !== 'number')
    {throw new Error('必须是整数')}
    return a + b
}

// 记忆函数 百搭的
function memorize(f){
    if(typeof f !== 'function')return ;
    var cache = {}// 负责空间换时间 不会被销毁的    自由变量
    return function(){
        var key = arguments.length + Array.prototype.join.call(arguments,',')
        // add 
        if(key in cache){
            return cache[key]
        }else{
            return  cache[key] = f.apply(this,arguments)
        }
    }
}
const memorizedAdd = memorize(add);
console.log(memorizedAdd(1,2));