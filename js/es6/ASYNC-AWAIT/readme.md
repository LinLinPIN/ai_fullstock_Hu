所有需要耗时的代码就叫异步代码，不耗时的就叫同步代码
异步执行效率高

# js 是单线程
导致代码是异步执行

# 回调函数
- 回调地狱：无限的回调嵌套，后期代码维护困难

# Promise 
1. Promise 实例对象后面可以接 .then() 方法，then中回调的执行取决于Promise中的resolve有没有生效
2. resolve(参数) 参数会传递给then 中的回调函数
3. then 方法会默认返回Promise对象，所以 then 可以接在 then 后面，当then中有人人为返回新的Promise对象时，then就将人为返回的Promise对象作为唯一的返回值，那么后面接着的then就相当于接在人为返回的Promise对象之后。

# async await

