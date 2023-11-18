# 前端界面开发之专业性

- 先结构，后样式
    使用 BEM 命名
    page + hd/bd/ft

- npm i -g stylus
    node 是全栈 js 的命令行，后端开发
    npm node的包管理器
    stylus 包是用来提升css开发速度的
    npm i -g stylus
    i install 的简称
    -g 全局安装
    stylus --version

- common.styl .styl
    - stylus 是css的超集 省去 :;{}提升效率
    - tab 缩进
    - 失败，重新运行 stylus -w common.styl -o common.css
        watch 监听styl文件的改变，自动编译css
    - stylus嵌套
        BE里写样式时，自动补全css前缀
    
- stylus 的功能
    - 支持变量
        晃点老板的利器

- 阿里的适配神器  flexible.js
    - 在移动端不要用px 是绝对单位
    - 移动端用rem这种相对单位1rem=html font-size(小程序用rpx)
    - 不同的手机html font-size 会去设置，不一样
        iphone 是设计稿使用的尺寸 375pt 750px/414pt
        37.5 375之间的关系
        100vw=10rem 不同的手机都这样，通过设置不一样的html font-size

- 移动端适配手写
    - 立即执行函数，不影响外界作用域
    - 1 rem = vw/10 兼容所有手机宽度
        设计稿上 750px = 2*350pt Photoshop设计稿为px单位
        120px/75px=?rem
    - onresize//手机ipad横屏竖屏的转换
    - dry 设计模式原则 封装，复用
    - DOM性能不太好，缓存DOM元素
    - script标签 src属性 加载一个资源，同步，会阻塞html的下载进程，一定要放在头部

- 后端素养训练
    - request http请求
        url(ip) + get 请求 响应是？ 服务器给你返回的财经首页html的二进制流
        response.text   html文本信息
    - parse 一下，BeautifulSoup(response.text,"html.parser")解析文本
        python最擅长文本，数据 解析 .csv .sql
    - find_all  在内存中查找
        link for link in links if "/news" in link
        
    - 随机功能