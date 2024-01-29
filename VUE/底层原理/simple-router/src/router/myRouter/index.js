import RouterLink from './RouterLink.vue';

const ROUTER_KEY = '_router_'

export function useRouter() {

}
export function createRouter(options) {
    return new Router(options)
}

export function createWebHashHistory() {
    function bindEvents(fn) {
        window.addEventListener('hashchange', fn)
    }
    return {
        bindEvents,
        url: window.location.hash.slice(1) || '/'
    }
}

class Router {
    constructor(options) {
        this.history = options.history
        this.routes = options.routes
        this.current = this.history.url

        this.history.bindEvents(() => {
            this.current = window.location.hash.slice(1)
        })
    }
    install(app) {
        app.provide(ROUTER_KEY, this)
        // 注册全局组件router-link
        app.component('router-link', RouterLink)
    }
}