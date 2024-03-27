# 说说异步的发展史
1. 回调：回调地狱（代码维护困难，排查错误困难）

2. Promise

3. generator
 - 可以分段执行，可以暂停
 - 可以知道是否执行完毕
 - 可以控制每个阶段的返回值的

 4. async/await === generator + Promise
 - 原理：async/await 本质是 generator 的语法糖
  generator 控制异步执行是靠 promise 状态变更来手动控制 next 的执行，async/ await 相比于 generator 的优雅体现在可以自动的执行generator中的next，控制 yield 的释放，结合 promise 可以实现异步操作的链式调用。
 主要的实现方式是递归调用 next，next 的执行结果需要为一个promise对象，next的递归调用应该在上一个next执行结果的 promise 状态变更为fullfilled后才递归，这样就能实现上一个yield后面的语句彻底执行出结果后才执行下一个，也就实现了await的效果。