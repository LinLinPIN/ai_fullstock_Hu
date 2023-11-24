let obj = {
    name:'涛哥',
    age : 18,
    like:{
        n:'reading'
    }
}

function shallowCopy(obj){
    if(!(obj instanceof Object)) return 
    // 如果形参obj是数组就创建数组，否则创建对象
    if(Object.prototype.toString.call(obj).slice(8,-1)==='Object')
    {let objCopy = {} }
    else {
        let objCopy = []
    }
    
    for(let key in obj){
        if(obj.hasOwnProperty(key))
        objCopy[key] = obj[key]
    }
    return objCopy
}

let newObj = shallowCopy(obj)
obj.like.n = 'running'
console.log(newObj);

let arr = [1,2,3,{a:1}]