# 1. js数组上面有哪些方法？
1. 增加: unshift push splice concat
2. 删除: pop shift splice slice
3. 改: reverse sort with
4. 查: indexOf lastIndexOf includes find
5. 转换: join
6. 迭代: forEach map filter some every
7. Array.from()伪数组转真数组   Array.of()将多个值转为数组

# 2. js字符串上有哪些方法？
1. 增: concat padStart
2. 删: slice substr删除到哪一个下标 substring与slice一样
3. 改: replace trim trimStart trimEnd padStart toUpperCase
4. 查: indexOf lastIndexOf includes EndWith startWith是否是以什么东西开头 
5. 转换: split

# 3. 谈谈js中的类型转换机制
- 是什么:
js中有原始类型和引用类型:
原始类型: number string symbol boolean undefined null Bigint
引用类型: arr Object function Data Regexp Set Map

通常开发过程中，会用到一些显示类型转换的手段来完成逻辑开发
Number()

在v8执行过程中还存在另一种转换 ———— 隐式类型转换

通常发生在比较运算符 和 算术运算符
[] ==![]

# 4. == 和 === 的区别？
    == 只判断值是否相等，类型不相等时会发生隐式类型转换

# 5. 深浅拷贝的区别？如何实现一个深拷贝？
- 深浅拷贝通常只针对引用类型

- 浅拷贝: 直接复制引用地址，修改对象内部的值，会改变原对象的值
只拷贝一层对象，复制这一层对象中的原始值，如果有引用类型的话，就复制他的指针
assign,concat,slice,解构

- 深拷贝: 递归拷贝，复制对象内部的所有值，如果有引用类型的话，会递归拷贝
层层拷贝，所有类型的属性值都会被复制，原对象的修改不会影响拷贝后的对象
JSON.parse(JSON.stringify(obj))对象转为字符串再转回对象，无法处理对象内部的undefined，symbol，function，无法处理循环引用 obj.c = obj.b,obj.b.n = obj.c

手写浅拷贝,for in,并且判断是否是显示原型上的属性,hasOwnProperty()

手写深拷贝