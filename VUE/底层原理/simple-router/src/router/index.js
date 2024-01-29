// import { createRouter, createWebHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from './myRouter'

const route = [{
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
}, {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes: route
})

export default router