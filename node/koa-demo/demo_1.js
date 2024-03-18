const http = require('http'); // commonJS  

const server = http.createServer((req, res) => {// req前端的请求 req后端的响应
    // 业务逻辑
    console.log(req, req.query);
})

server.listen(3000, () => {
    console.log('listen on port 3000');
})