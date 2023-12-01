# 基本数据类型之间的转换
1. 转bool
2. 转数字
3. 转字符串
4. 转对象


# 对象转原始类型    obj.toString()      obj.valueOf() 对包装类生效
toString() 在js中有多个版本
- {}.toString() // "[Object class]"
- 数组的toString()会将数组中所有的元素转化为字符串，并以逗号拼接
- 函数的toString()会将整个函数体以字符串形式返回
- Date的toString()会将整个date以字符串形式返回



## 对象转字符串     ToPrimitive(obj,String)
1. 判断obj是基本类型，则返回
2. 否则调用 toString 方法，如果得到原始类型则返回
3. 否则调用 valueOf 方法，如果得到原始类型，则返回
4. 否则 报类型错误

## 对象转数字   ToPrimitive(obj,number)
1. 判断obj是基本类型，则返回
2. 否则调用 valueOf 方法，如果得到原始类型，则返回
3. 否则调用 toString 方法，如果得到原始类型，则返回
4. 否则 报类型错误

## 所有对象转bool一定为true（包括空对象）


# 一元运算符    +


# 二元运算符
+ 优先当作加法运算，所以左右先转Number
v1 + v2 === ToPrimitive(v1) + ToPrimitive(v2)   //v1,v2都为引用类型
1. 如果 lprim 是字符串 或者 rprim是字符串，则返回将不是字符串的一方转为字符串，再进行拼接
2. 否则 都转为number 进行加法运算

## == 相等运算符 （ === 不发生隐式类型转换）
x == y
如果x和y类型相同
如果x是undefined和null返回true
如果x是number，如果x是NaN返回false(NaN!=NaN)
    如果x和y的number值相同，返回true
如果x是字符串，那就看x和y是不是完全相同的字符串序列
如果x，y是布尔值，如果x和y是相同的值那就相同
如果x和y是对象，且是同一个对象(地址相同)，返回true

如果x是null且y未定义，则返回true
如果x是number，y是string，返回x==ToNumber(y)的结果
如果x为bool，则返回 ToNumber(x)==y
如果x为String或Number，y为对象，返回 x == ToPrimitive(y)对象转成字符串最后还会转成数字