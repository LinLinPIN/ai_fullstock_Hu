
let obj = {
    name:'涛哥',
    age : 18,
    like:{
        n:'reading'
    }
}

let o = Object.create(obj)
o.sex = 'boy'

for(let key in o){
    console.log(key,o[key]);
}
// for-in 还会把隐式原型上的属性也遍历

for(let key in o){
    if(o.hasOwnProperty(key)){// 判断对象身上属性是隐式还是显式的
        console.log(key);
    }
}