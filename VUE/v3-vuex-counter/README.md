- vue 全家桶
    - vue 组件 和 mvvm
    - vue-router SPA 前端路由
        - #/about hash
        - /about history
    - vuex 状态管理 仓库
        假如你是京东 快 仓库
        UI Component + 数据流归Store管理
        如何将数据和组件分离

    - vue 语法演变
        - vue 2.0 选项式api data methods computed
        - setup 语法糖  export default{
            setup(){
                retrun{

                }
            }
        }
        - vue 3.0 组合式api composition API 最简洁
            script setup
        - 干掉了 this vue开发面向对象进入到最流行的函数式编程

- 模块化
    - 组件就是一个模块 counter组件
    - counter 组件可以把什么东西再优化一下？
        - 按钮分开 UI组件库 vant ElementPlus
        - 组件中的数据可以分离出去
            - 数据是共享的 兄弟组件之间 陌生人之间 登录状态
            - 业务逻辑
                请求 onMounted
            - 干脆把数据和组件分离  财务
        
- pinia 的数据管理
    - 最先进的数据管理，vuex 落后了
    - defineStore 方法 用于定义一个store 仓库名字，函数返回状态和方法，取名以use开头 
    - 组件只需要focus UI ，不需要打理数据，完成职责分离
        - s t o r e 数据模块
        - 组件 UI 模块
    - main.js 
        import { createPinia } from 'pinia'

- 网易云音乐

- 前后端分离 开发人员各司其职

    - 前端 8080 5173
    - 后端 3000 负责写api
    - 前后端分离的好处
    http://localhost:8080/
    127.0.0.1   定位一台机器 可以运行多个程序

    - UI 组件   数据管理 模块化
        - vue 项目中负责请求管理 axios 
        api

- api/ 目录 请求模块 是vue项目的核心模块
    前后端的协作    
    - /api/index.js
        业务 列出来各种请求接口 getBannerData
    - /api/http.js  封装请求
    - fetch xhr ？
        流程性代码 重复编写
    - 大型项目中 
        请求次数可能比较多，模块化的需要
        散落在各个组件里的请求是很难管理的
    - axios 封装
        - xhr,fetch 弱小了
            new XMLHttpRequest()
        - 好处