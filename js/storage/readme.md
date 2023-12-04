# 实现Storage，使得该对象为单例（只会被实例化一次的类），基于localStorage的封装，实现方法setItem(key.value)，和getItem(key)。

- localStorage 只要不手动删除，就一直在
    属于 domain 安全

- 单例
    class + static
    构造函数 + 闭包

- 单例的登录弹窗功能时
    不要将login html 写在原html里，宁愿在js里多写代码，推迟到真正登录时，再去添加，有利于首页加载速度。