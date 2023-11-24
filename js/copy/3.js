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
obj.e = obj.f
obj.f.n = obj.e// 循环引用
console.log(obj);

let str = JSON.stringify(obj)// 对象转换字符串

console.log(JSON.parse(str));// 字符串转对象

let obj2 = JSON.parse(JSON.stringify(obj))
obj.a.n=2
console.log(obj2);// obj2.a.n=1 深拷贝