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