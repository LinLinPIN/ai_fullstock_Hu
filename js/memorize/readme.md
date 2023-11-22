# 两数相加

- 伪数组    Arguments
    Object.prototype.toString.call()    '[Object xxx]'
    有length属性，可以用下标访问 但是不是真的数组 没有join方法
    永久
    - Array.from(arguments)
    - [...arguments]
    临时
    - Array.prototype.join.call(arguments,'-')
- 永远不要相信用户，要校验参数，代码一定要健壮
- var obj = {a:1}
    内存存的    头部前三位表示数据类型  对象000 二进制
    null    开头也是000

- 递归
    - 自顶向下解决问题
        不停的函数入函数执行栈解决问题
    - 重复计算
        memorize
    - 不能被允许的问题
    - js 优点
        cache 就不用在全局了，因为有闭包
    
