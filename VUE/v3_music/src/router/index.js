import { createRouter, viewDepthKey,createWebHashHistory } from 'vue-router'
// 路由配置
// #/movie /movie前端路由的两种形式 #/hash /history

// 路由单例
const router = createRouter({
  history:createWebHashHistory(),
  // 路由数组
  routes:[
    {
      path:'/',
      name:'Home',
      component:()=>import('../views/Root.vue'),
      redirect:{ name:'discover'},
      // 网站是路由嵌套的 一般三层 嵌套路由
      children:[{
        path:'discover',
        name:'discover',
        // 显示menu ， header    router-view -> discover  Layout
        component:()=>import('../views/discover/Discover.vue'),
        // 路由对象 添加属性 meta 媒体信息
        meta:{
          menu:'discover',//menu
          keepAlive:true
        }
      }]
    }
  ]
})

export default router;