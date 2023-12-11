# es6 class 和 function 的对比
- 构建类
    - class es6才有的
        es6 的使命之一是让js像其他大型语言一样适合企业级开发
        class js新增了这个关键字，只是一颗语法糖，原型式的面向对象没有改变
        都可以对应function
    - 构造函数 + 原型对象 + 实例
        实例 和 类没有血缘关系
        JS内本身就没有类
        构造函数 执行 this 指向实例，完成实例属性的创建
        原型对象 实例.__proto__ 原型关系
        原型对象 constructor 属性告诉某个实例他是哪个构造函数的instanceof

    - for key in 原型对象上哪些方法是可以被遍历的
        发现 constructor 不可以被遍历
        Object.keys() 拿到对象上可以被遍历的方法

    - 语法糖
        class Person 原型式的面向对象
        Person.prototype 和es5 方式声明是一样的
        class 声明的实例继承的的方法是使用extends关键字继承的，不可以被枚举因此不能被Object.keys(Person.prototype)找到并输出，而构造函数生成的实例是通过原型链方式继承的
        使用Object.getOwnPropertyNames(Person.prototype)则可以拿到所有方法