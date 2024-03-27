# HTTP 超文本传输协议 /0.9
 - 基于TCP 
 - 只有请求行和响应行   GET /index.html
 - 以 ASCII 字符流的编码方式进行传输

 # HTTP 1.0
 - 0.9的缺点：支支持html一种类型的资源传输

 支持 js，css，图片，音频，视频各种类型资源

 - 请求头
    accept:text/html
    accept-encoding: gzip deflate br
    accept-language: zh-CN

 - 响应头
    content-type: text/html
    Content-Length:1024 后端内容动态生成，无法确定数据大小

 - 为了传输不同的类型资源而诞生的

 # HTTP 1.1
 - 持久连接，减轻了服务器的负担
 - 同时最多维护6个持久连接

 - 队头阻塞
    1. 前一个http请求没有得到响应，后一个http请求无法响应

 - HOST
    为了解决在一台服务器上托管多个域名（虚拟主机）的情况。通过 Host 头字段，客户端可以告诉服务器请求的是哪个具体的域名，从而服务器能够根据不同的域名来处理请求，实现虚拟主机的功能。

 - 为了解决后端动态生成内容的问题，引入了chunked
    Chunk transfer 机制:将资源文件处理成若干个数据块并编辑数据块的大小，最后发送一个标记为 0 的数据块来告诉客户端资源传输完成

 # HTTP 2.0
 - 1.1 缺点
   1. 队头阻塞
   2. 
