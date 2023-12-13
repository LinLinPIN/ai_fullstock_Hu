# VUE 开发流程

- 得到一个开发模板
    要开发企业级项目，不用从0开始
    npm init vite
    node packge management
    - 基于vite 工作脚手架创建项目
        选择 vue
        选择 js
    - 项目开发模板 s t a r t   t e m p l a t e
    - npm config set registry https://registry.npmmirror.com/
    - npm i 安装了依赖

- 工程概念
    vite 工程需要的脚手架
    devDependencies 开发阶段的依赖，上线后不需要
        - 开发阶段
        - 测试阶段
        - 上线阶段
        - npm run    运行所有script脚本

- App.vue
    - vite 的功劳，支持编译 .vue 文件
        .style -> .css
    - 三段
        template
        script
        style

    - src/ 
        开发目录
    - dist/
        上线目录

- vue 思想
    - 不再做DOM编程
        获取或重设html 动态编程不再需要操作DOM，DOM性能不好
    - 在template 数据绑定{{name}}，绑定 script 里的name变量
        当它需要动态改变时，响应式编程 ref(初始值)
        name.value = 更新值 template所有绑定到他的地方全部都热更新