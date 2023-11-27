# 百度面试题

- NaN
    - HTML5 提供了增强的表单类型    email/number/range/color...
    - 字符串，age -> parseInt() 确保类型和值正确
    无法解析为number，NaN 来表达 Not a number 类型是number
    parseInt("1b23") = 1

- [1,2,3].map(parseInt)// 遍历数组并且会返回一个新数组
    forEach

- 看 MDN 文档 parseInt(str,redix?)
    map(item, index, array)
    parseInt(1,0)// 0进制无效所以是10进制
    parseInt(2,1)// 1进制   0 0 0 NaN
    parseInt(3,2)// 2进制   2   NaN
     
    redix 指定要转换成几进制的数字

- npm init -y 初始化为一个后端项目 package.json
- npm i json-server node_modules
- db.json 把数据以json的格式存在这个文件中
- script dev: json-server -w db.json
    http://localhost:3000/posts     api 服务
- npm run dev