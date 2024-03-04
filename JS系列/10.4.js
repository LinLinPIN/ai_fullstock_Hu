Parent.prtototype.say = 'hello'
function Parent() {
    this.name = "Parent"
}

// Child.prototype = new Parent()
Child.prototype = Object.create(Parent.prototype)//Object.create()创建空对象无constructor导致Child的constructor找不到
Child.prototype.constructor = Child// 重新绑定Child的constructor为Child
function Child() {
    Parent.call(this)// this.name = "Parent"显示绑定
    this.type = 'Child'
}


let c1 = new Child()