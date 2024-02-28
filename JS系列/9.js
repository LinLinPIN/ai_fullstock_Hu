// Foo.prototype.bar = function () {
//   console.log('bar');
// };

Foo.prototype.age = 18
function Foo(name) {
    this.name = name
}

let f = new Foo('Tom')

// 属性的继承
function car(color) {
    this.height = 1400
    this.lang = 4900
    this.color = color
}

let c = new car('red')
let h = new car('green')

car.prototype = {
    name: 'BMW'
}

console.log(c);