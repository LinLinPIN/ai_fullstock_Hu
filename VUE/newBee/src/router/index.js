import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/home.vue'

const routes = [{
    path: '/',
    redirect: '/home'
}, {
    path: '/home',
    name: 'home',
    component: Home
}, {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/Cart.vue')
},
{
    path: '/user',
    name: 'user',
    component: () => import('@/views/User.vue')
},
{
    path: '/category',
    name: 'category',
    component: () => import('@/views/Category.vue')
},,{
    path:'/login',
    name:'login',
    component: () => import('@/views/Login.vue')
}]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router