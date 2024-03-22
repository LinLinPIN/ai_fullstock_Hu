import { reactive, computed, inject } from 'vue'


const STORE_KEY = '__store__'
function useStore() {
    return inject(STORE_KEY)
}

class Store {
    constructor(options) {
        this.$options = options;// 原来的对象
        // 私有的对象
        this._state = reactive({
            data: options.state()
        })
        this._mutations = options.mutations
        this._actions = options.actions
        this.getters = {}
        Object.keys(options.getters).forEach(name => {
            const fn = options.getters[name]
            this.getters[name] = computed(() => fn(this.state))
        });
    }
    // 提升了他的易用性
    get state() {
        return this._state.data
    }
    // 严谨的状态修改
    commit = (type, payload) => {
        const entry = this._mutations[type]
        return entry && entry(this.state, payload)
    }
    dispatch(type, payload) {
        const entry = this._actions[type]
        return entry && entry(this, payload)
    }
    install(app) {
        app.provide(STORE_KEY, this)
    }
}

const createStore = (options) => {
    // 实例化
    return new Store(options)
}

export { createStore, useStore }