import { createRouter, createWebHistory } from 'vue-router'
import NoteClass from '../views/NoteClass.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  }, {
    path: '/register',
    component: () => import('@/views/Register.vue')
  }, {
    name: '/noteClass',
    component: NoteClass
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router