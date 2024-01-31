import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
  path: '/',
  redirect: '/home'
}, {
  path: '/home',
  name: 'home',
  component: Home
}, {
  path: '/amusement',
  name: 'amusement',
  component: () => import('../views/Amusement.vue')
}, {
  path: '/business',
  name: 'business',
  component: () => import('../views/Business.vue')
}, {
  path: '/training',
  name: 'training',
  component: () => import('../views/Training.vue')
}, {
  path: '/goodDetail',
  name: 'goodDetail',
  component: import('../views/GoodDetail.vue')
}, {
  path: '/login',
  name: 'login',
  component: import('../views/Login.vue')
}]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router