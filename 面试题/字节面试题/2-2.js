Function.prototype.a = () => console.log(1);
Object.prototype.b = () => console.log(2);
function A() { }
const a = new A()
console.log(a.__proto__);
console.log(A.a);