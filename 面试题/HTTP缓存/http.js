const http = require('http')
const url = require('url')

const responseData = {
    ID: 'zhangsan',
    Name: '张三',
    Register: '2019-01-01'
}
function toHtml(data) {
    return `
    <ul>
    <li><span>账号：</span><span>${data.ID}</span></li>
    <li><span>昵称：</span><span>${data.Name}</span></li>
    <li><span>注册时间：</span><span>${data.Register}</span></li>
    </ul>
    `
}

const server = http.createServer((req, res) => {
    const { pathname } = url.parse(`http://${req.headers.host}${req.url}`)
    if (pathname === '/') {
        res.writeHead(200, { 'Content-Type': `application/json` })
        res.end(JSON.stringify(responseData))
    } else {
        res.writeHead(404, { 'Content-Type': `text/html;charset=utf-8` })
        res.end(toHtml(responseData))
    }
})

server.listen(3000, () => {
    console.log('server is running at port 3000');
})