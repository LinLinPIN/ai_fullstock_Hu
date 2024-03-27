
Parent.prototype.say = 'hello'
function Parent(like) {
    this.name = "Parent",
        this.like = like
}

Child.prototype = new Parent('coding')
function Child() {
    Parent.call(this, like)// this.name = "Parent"显示绑定
    this.type = 'Child'
}

let c = new Child('coding')
console.say()// 无法访问，不能继承父类显示原型的属性