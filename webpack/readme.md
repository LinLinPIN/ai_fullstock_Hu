# vite 之前的前端工程化脚手架

- 把项目跑起来
    vue 项目 .vue css(sass/less) image
    静态资源 打包一下，让他可执行

- 打包
    - 将src 目录下的资源打包到index.html里面运行
    - vite/webpack 现代MVVM 开发工艺    基于命令行的后端实现
     webpack node
     vite node + rust + go

 - vite webpack 比较
    - webpack 配置比较复杂学习成本高 entry output plugin
    - vite 相对简单
    - vite script type=module 引入main.js文件，利用了es6 的module 更快 bundless
        webpack 早期的没有es6的module，需要webpack来打理文件的依赖关系 打包 比较慢

 - dist目录就是我们要上线的目录
 - babel
    js 语法转换器 js 得到新生，最新的语法可以放心使用，Babel 会帮我们转译成低级的语法
    @babel/core 核心功能 
    @babel/preset-env 预处理 按环境的要求编译成相应的语法 默认为es6+
    babel/loader    