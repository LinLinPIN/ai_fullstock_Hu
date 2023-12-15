import { createRouter,createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Class from '../views/Class.vue'


const routes = [{
            path:"",
            redirect:'/home'
        },
    {   
        path:'/home',
        component:Home, 
        children:[
            {
                path:'',
                redirect:'/home/suggest'
            },
            {
                path:'suggest',
                component:()=> import('@/views/homeChild/Suggest.vue')
            },{
                path:'/home/newest',
                component:()=> import('@/views/homeChild/Newest.vue')
            }
        ]
    },{
        path:'/class/:id',
        name:'class',
        component:Class
    },{
        path:'/hot',
        component:()=> import('../views/Hot.vue')
    }
]

const router = createRouter({
    routes,
    history:createWebHistory()
})

export default router