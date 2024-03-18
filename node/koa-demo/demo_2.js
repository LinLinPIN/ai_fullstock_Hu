const Koa = require('koa')
const app = new Koa()

const main = (ctx) => {
    console.log(ctx.url, ctx.query.id);
    ctx.body = `hello ${ctx.query.id}`
}

app.use(main)

app.listen(3000, () => {
    console.log('项目已启动');
})