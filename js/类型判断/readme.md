# typeof
1. 可以准确判断除null之外的原始类型
2. 可以准确判断 function

# instanceof
1. 只能判断引用类型
2. 通过原型链的查找来判断

# Object.prototype.toString()
- Object.prototype.toString.call().slice(8,-1)
1. 如果 this 值为 undefined，则返回 “[object Undefined]”。
2. 如果 this 值为 null，则返回 “[object Null]”。
3. 设 O 是 ToObject(this),如果传的是原始类型，那就会调用ToObject将原始类型转换为对象
4. 让 class 成为 O 的 [[Class]] 内部属性的值。
ToObject('hello')// {'hello'} // [[class]]:String

5. 返回将三个字符串 "[object "、"class" 和 “]” 连接起来的字符串值

- xxx.call(原始值)  3.toString会将其转为对象
- toString通过读取数据结构内部属性来读取到数据的类型    [[class]]

# Array.isArray()
- 只能判断是不是数组

let arr = []
arr.isArray()