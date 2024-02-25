import { createRouter,createWebHistory } from "vue-router";
import Home from '../views/Home.vue'

const routes = [
    {
        path:'/home',
        name:'home',
        component:Home
    },{
        path:'/',
        redirect:'/home'
    },{
        path:'/choose',
        name:'choose',
        component:()=>import('../views/Choose.vue')
    },{
        path:'/bookshef',
        name:'bookshef',
        component:()=>import('../views/Bookshef.vue')
    },{
        path:'/mine',
        name:'mine',
        component:()=>import('../views/Mine.vue')
    },{
        path:'/search',
        name:'search',
        component:()=>import('../views/Search.vue'),
        children:[
            {
                path:'',
                redirect:'/search/search-home'
            },{
                path:'search-home',
                name:'search-home',
                component:()=>import('../views/SearchHome.vue')
            }
        ]
    },{
        path:'/category',
        name:'category',
        component:()=>import('../views/Category.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router 