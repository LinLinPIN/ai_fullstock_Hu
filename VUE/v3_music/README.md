# 网易云音乐

- 组件思维
    - 图标组件库
    - Layout 组件
    - 业务组件
        - Menu 不用自己开发，ElementPlus
        - Swiper
        - Music
- SPA
    Menu -> Router
- 数据接口

## VUE 中大型项目开发流程

- 路由  组件思维
    App(根组件) -> router-view(vue-router内置的组件) -> 页面级别组件(views/) -> 子组件

- 样式准备
    - reset
    - stylus
    - tailwindcss原子化css
        - 安装 
        npm i -D tailwindcss开发阶段用的库，上线的时候不用
        - 初始化
        npx tailwindcss init -p
        npx 运行
        页面样式也和汽车组装一样的，原子化 不需要写样式
        - w-1 w 代表宽度 0.25rem
        - flex flex-col flex-shrink-0 items-stretch 原子样式 细粒度
        拼装
    - 主题风格样式

- Layout
- 页面级别组件
- 组件

## 项目加分项或者难点
    - 多级路由中meta属性一定要添加
    - tailwindcss 加快样式开发速度
        解决适配问题 w-56 w-sceen rem vw
    - 区别开发阶段
        dev test product
        npm i -D
    - 单页应用，在组件化开发之外要搭好Layout，跟Layout相关的组件 放在
    /components/layout/

## 考点
- flex 布局
    item-stretch align-items:stretch
    弹 flex:1; flex-grow:1.flex-shrink:1 flex-basis:0%;
- VUE 开发思想
    - 组件化思想
        - components
            - layout
            - common
        - views/pages/
        - ElementPlus
    - 数据驱动思想
        - 数据绑定 {{}}
        - :class :style :动态绑定 响应式
        - props
        - computed
        - vuex
        - api
- hash路由 兼容性好 url 一部分
    https://juejin.cn/user/3222015152759789
    url的hash部分发生改变 页面不会重新刷新 页面瞄点
    缺点 和传统的路由不太一样
    html5 提供 history 路由 优点是和传统路由一样，缺点是兼容性有问题
- vue-router js 跳转路由
    - vue-router 提供了useRouter useRoute 两个函数
    - useR outer() 拿到路由管家对象，在这个对象上有push方法
    {name 对应 route.name} 配置时name 属性不能少
    - useRoute() 拿到当前路由对象 meta 属性 关于这个路由的所有东西
    - 路由的切换，直接通过分享进入页面