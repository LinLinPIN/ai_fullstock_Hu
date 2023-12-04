# 面向对象的js 练手

- editor.js 提供一个EditInPlace 类的功能
    - 复用
        一个文件一个类
    - 封装
        实现的细节，只需要用，不需要了解为什么

- 动态DOM编程
    - document.createElement(tag)
    - 父节点挂载子节点
        appendChild

- 函数this 问题
    - 在面向对象中，需要this 指向实例，对象上的方法和属性
    - 事件监听等会出现this丢失问题
        - 作用域链概念，提前保存this
            var that = this 在this丢失前（事件监听函数外部）提前保存this
        - 箭头函数
            箭头函数没有this，会指向外层，也就是实例化的对象
        - bind 绑定函数内部this指向
            bind apply call 都是手动指定this，bind返回的是一个函数，可以等一下执行，多次调用，而apply和call是立即执行