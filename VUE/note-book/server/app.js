const Koa = require('koa')
const bodyParse = require('koa-bodyparser')// 解析post请求的参数
const app = new Koa()
const user = require('./routes/user.js')
const cors = require('koa2-cors')

app.use(bodyParse())
app.use(user.routes(), user.allowedMethods())
app.use(cors())// 处理跨域


app.listen(3000, () => {
    console.log('listening on port 3000');
})