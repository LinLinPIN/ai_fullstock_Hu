let obj = {
    name:'李总',
    age: 18,
    a:{
        n:1
    },
    b:undefined,
    c:null,
    d:function(){},
    e:Symbol('hello'),
    f:{
        n:100
    }
}

function deepCopy(obj){
    let newObj = {}
    for(let key in obj){
        if(obj.hasOwnProperty(key)){// 区分obj[key] 是原始类型还是引用类型
            if(obj[key] instanceof Object){
                newObj[key]=deepCopy(obj[key])
            }
            else{
                newObj[key]=obj[key]
            }
        }
    }
    return newObj
}

let obj2 =deepCopy(obj)
obj.a.n=2
console.log(obj2);