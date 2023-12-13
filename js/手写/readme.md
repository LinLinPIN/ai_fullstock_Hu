- 我们有一个ajax 的异步获取数据的任务
- 写一个函数，并返回promise实例，可以thenable 可以await
- promise 实例初始状态为pending，在promise内部有一个 state的属性 初始为pending
    只要为pending   await p 就一直等待
- promise 构造函数中会立刻执行传给他的执行器，也就是第一个函数
    得到reolve，reject两个函数
    执行器就是异步窗口的容器 当异步任务结束后，成功就调用resolve()
    失败就调用reject(error) this.state fullfilled 或者 rejected
    await 执行完成，并把data 交给左边 接着返回正常的同步流程