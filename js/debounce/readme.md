# JS八股文   防抖节流

## 前端”三清“
- window
    BOM 浏览器对象 负责body之外的浏览器功能
- document
    DOM js会和DOM进行深度交流。
- Object 
    js的顶层对象
    new Object()   {}简写
    wan.__proto__(私有属性,原型)->Object->null
- js 类
    - 大写的函数作为构造函数
        new + this 完成由{}空对象到构造完成的过程
        对象就有属性了
    - 对象的方法
        对象的方法放在构造函数的prototype上
        wanwan 和Person 没有血缘关系，女娲和人
        构造的过程 new Person {}Object 空对象
        Person.prototype{}
- Person.prototype 原型
- Object.prototype 原型
- wanwan.__proto__.__proto__.__proto__原型链
- 原型的哪一栈上有的方法，对象都可以用
- js面向对象不是血缘的，而是面向原型的
- 函数，在运行的那一瞬间，this的值就确定了
    this 由函数的运行方式决定  在事件的处理函数中，this指向事件发生的元素本身
- this 是什么？
    - 指针 函数的需要
    - 定义时和执行时
    - 函数运行时this才被决定指向
        运行时以不同的方式来运行，值不一样
    - this的指向
        - 普通函数方式运行 this 指向 window，普通函数不需要this(use strict//严格模式)
        - 事件的处理函数运行时，this 指向事件发生的元素
        - 函数作为对象的方法被调用时，this指向对象本身
        - 函数以构造函数的方式运行，this指向实例(this.name=name)


