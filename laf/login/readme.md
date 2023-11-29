- json-server
    npm node package management
    npm包   其中之一

- package.json 的了解
    - 项目描述文件，由npm init -y 生成
    - dependencies  npm i json-server...
    - script 项目可运行的脚本区域
        npm run 运行起来
        "dev": :"json-server -w todos.json"
        dev脚本的名字   

- web server    HTTP协议
    - 前端页面的server -> laf
        localhost:3000 -> 线上，在线的域名
    -后端server
        json-server 启动的api接口

- 请举出耗时的异步任务
    setTimeout
    promise
    eventlisenter
    接口请求
    数据库查询
    then 
    async + await

- fetch 比 xhr 对象更简单的http请求对象
    - 它是Promise 类的一个实例 es6的异步解决方案
    - xhr ? then ?
        流程复杂，