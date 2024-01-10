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