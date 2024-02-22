import RouterLink from './RouterLink.vue';
import RouterView from './RouterView.vue';
import { inject, ref } from 'vue'

const ROUTER_KEY = '_router_'

export function useRouter() {
    return inject(ROUTER_KEY)
}
export function createRouter(options) {
    return new Router(options)
}

export function createWebHashHistory() {
    function bindEvents(fn) {
        window.addEventListener('hashchange', fn)//监听浏览器地址改变事件
    }
    return {
        bindEvents,
        url: window.location.hash.slice(1) || '/'// 获取当前地址
    }
}

class Router {
    constructor(options) {
        this.history = options.history
        this.routes = options.routes
        this.current = ref(this.history.url)

        this.history.bindEvents(() => {
            this.current.value = window.location.hash.slice(1)
        })
    }
    install(app) {
        app.provide(ROUTER_KEY, this)
        // 注册全局组件router-link
        app.component('router-link', RouterLink)
        app.component('router-view', RouterView)
    }
}