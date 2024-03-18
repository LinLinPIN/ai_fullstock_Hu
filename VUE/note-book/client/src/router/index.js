import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
    path: '/login',
    component: () => import('../views/Login.vue')
}]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router