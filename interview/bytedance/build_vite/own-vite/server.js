// 后端框架 commonjs
// 服务器端 vite 是用服务器端实现的

const Koa = require('koa');
// 实例化KOA 就是一个后端应用
const app = new Koa();

const fs = require('fs');// node的文件系统，内置的


app.use(async ctx => {
    // Http 是基于请求响应的简单协议
    // index.html返回给客户端
    // 字符串二进制流
    // 代码在内存中运行
    // 读取文件系统里的index.html  fs模块
    // js是异步的，node支持异步同步化
    let content = fs.readFileSync('./index.html', 'utf-8');
    ctx.body = content;
})

// 后端启动web服务
app.listen(5174, () => {
    console.log('项目在5174');
})