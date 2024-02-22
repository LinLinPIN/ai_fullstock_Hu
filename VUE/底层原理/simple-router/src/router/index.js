// import { createRouter, createWebHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from './myRouter'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const route = [{
    path: '/',
    name: 'home',
    component: Home
}, {
    path: '/about',
    name: 'about',
    component: About
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes: route
})

export default router