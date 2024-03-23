# 后台管理系统

- 开发的产品类型
   - 用户前台 vue 单页应用
   - 后台api服务 接口
   前后端分离
   - 后台管理系统
      - 开个权限吧
      - 公司内部系统
         VUE3(proxy) + TS(类型/严谨/质量)
         + ElementPlus(UI组件) + 类库(Echarts\axios\js-cookie\moment)

- vite 配置
  - vite 工程化脚手架
  - 短路径 alias
      @ -> src
      views->src/views
      interface->src/interface
   - 自动加载element-plus
   - @types/node
      - ts 有类型系统
      - node path 没有的 js时代的产物
      - string number + interface/type
      - 再安装一个 node的类型补丁
      - vuex/vue-router ？ @types/vuex 用ts写出来的，自带类型系统
      - vue3 主要也是用ts写的

- vue2 和 vue3的区别
  - 选项式API和组合式API
      - this 不需要，拥抱函数式编程
      - 代码量大的话 data+method+getters 逻辑混乱
      - compositions 可以让 reactive methods以业务单位在一起，逻辑更清晰，可读性更强
   - 响应式原理
      - vue2 defineProperty （一次性代理完）数组 索引变化
      - vue3 proxy和面向对象的
         reactive 用的是proxy，有13种拦截方法，性能更好（懒代理）
         ref 用的就是面向对象的get set
   - v-if 和 v-for 优先级