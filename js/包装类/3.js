// 对象的创建

var obj = {} // 对象字面量

var obj2 =new Object();// 构造函数

function Car(color){
    this.name='BMW'
    this.hieght=1400
    this.lang=4900
    this.weight=1000
    this.color=color

//     var this={
//         name='BMW'
//    hieght=1400
//     }
//     return this
}
let car =new Car('green')// 实例对象==this
let car2=new Car('pink')
console.log(obj,obj2)
car.name='劳斯莱斯'
console.log(car2);