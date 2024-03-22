# 海马体

- 2023年现象级应用
- 以前花99.9 拍海马体照片
    化个妆、修个片，选个风格 证件照 简历
- 海马体App 用AIGC 技术完成
    只需9.9，上传自己的一些照片，就可以生成
- LLM 找到应用场景落地的成功案例
- 2023年，海马体App 会发布
    tokens
- 我很想加入海马体，这支团队找到了AI落地的感觉
    肯定会在更多的领域，找到了AI产品开发的灵感
    在这样的团队里做开发会有很好的未来，因为未来是属于AI的，未来一定是属于知道怎么让AI落地的团队的

- vuex 是数据流管理的设计模式，由state、getters、mutations、actions 构成
- UI组件 （简单）+ 数据管理（清晰、共享） 大型项目
- 缺点是学习成本高，难以理解 mutation，使用起来繁琐，比起来pinia使用更加的简洁更好理解
- createStore() 返回一个store的单例对象 数据的安全和正确，只能有一个

- 请介绍下自己
    了解你
    破冰
        我平时比较喜欢在掘金上写一些技术文章 -> es6
        通过阅读源码来提升代码能力 -> vuex

- vue 源码学到了什么
    - 严谨的代码逻辑
        vuex 查找mutation时找到了才会执行
    - 优秀的代码思想
        提升自己的代码能力

- vuex 源码学到了什么？
    - createStore 返回了store状态树单例
        因为他只会被调用一次，确保了状态的正确性
    - provide/inject
        父子组件通信    父组件provide发布，子组件inject
        use(store) 启用了vuex生态
        install 方法，传递app
    - dispatch commit 方法
        了解底层原理 -> 使用vue会更加得心应手
    - es6 class 封装 store 类
        options state函数返回的对象是初始数据
        使用reactive将其变成响应式
        加上data数据的概念
        完成响应式数据的概念 即 this.$state
    - _代表私有属性
        通过get方法来返回this.$state.data

    - es6 class 语法
        - es6 主要目的是让 JS 这门语言更加的适合大型项目企业级开发，简洁优雅
            传统的面向对象支持
            class constructor extends static get set 

        - 依然是原型链式的面向对象
        - class 只不过是语法糖
        - proxy 代理
            聊到 reactive 的源码
        - Map WeakMap
            JSON Object key只能是字符串，不能放对象
            Set WeakSet
        - es6 模块化
            vite之所以比webpack快就是因为vite使用了自带的module以及使用了缓存，不需要像webpack使用require
        - async await
        - 箭头函数 解构 模板字符串 promise