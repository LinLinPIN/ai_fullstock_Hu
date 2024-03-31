const http = require('http')
const url = require('url')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {
    // 将前端请求的地址转换成url格式，再拼接www这个路径，最后读取整个文件的绝对路径
    let filePath = path.resolve(__dirname, path.join('www', url.fileURLToPath(`file:/${req.url}`)))
    console.log(filePath);
    if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath)// 读取一个文件的详细参数
        let status = 200
        const timeStamp = req.headers['if-modified-since']
        if (timeStamp && Number(timeStamp) == stats.mtimeMs)
            status = 304
        const isDir = stats.isDirectory()
        if (isDir) {
            filePath = path.join(filePath, 'index.html')
        }
        if (!isDir) {
            // 读取资源文件并返回
            const content = fs.readFileSync(filePath)
            const { ext } = path.parse(filePath)
            res.writeHead(status, {
                'Content-Type': 'text/html;charset="utf-8"', 'Cache-Control': 'max-age=86400', 'Las-Modified': stats.mtimeMs
            })

            return res.end(content)
        }
        console.log(stats);
    }
})


server.listen(3000, () => {
    console.log('server is running at port 3000');
})