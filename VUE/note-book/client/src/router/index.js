import { createRouter, createWebHistory } from 'vue-router'
import NoteClass from '../views/NoteClass.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    meta: '登录'
  }, {
    path: '/register',
    component: () => import('@/views/Register.vue'),
    meta: '注册'
  }, {
    path: '/noteClass',
    component: NoteClass,
    meta: '笔记分类'
  }, {
    path: '/noteList',
    component: () => import('@/views/NoteList.vue'),
    meta: {
      title: '笔记列表'
    }
  }, {
    path: '/noteDetail',
    component: () => import('@/views/NoteDetail.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 全局路由守卫
const whitePath = ['/login', '/register']
router.beforeEach((to, from, next) => {
  if (!whitePath.includes(to.path)) {
    // 看本地存储有没有值
    if (!localStorage.getItem('userInfo')) {
      router.push('/login')
      return
    }
  }
  next()
})

export default router