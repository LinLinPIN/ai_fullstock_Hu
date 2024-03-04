// 对象的隐式原型等于构造函数的显示原型
// 找对象身上的属性时，会先去对象内部找，找不到就回去对象的隐式原型上找也就是构造函数的显示原型
// __proto__隐式原型
// prototype显示原型
function Car(color, speed) {
    this.color = color;
    this.speed = speed;
    this.seat = [1, 2]
}

function Truck() {
    this.container = true
}

Truck.prototype = new Car()// 原型链继承

let truck = new Truck();

console.log(truck.__proto__);