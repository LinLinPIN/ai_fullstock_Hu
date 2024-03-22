import { reactive, computed } from 'vue'
class Store {
    constructor(options) {
        this.$options = options;// 原来的对象
        // 私有的对象
        this._state = reactive({
            data: options.state()
        })
    }
    // 提升了他的易用性
    get state() {
        return this._state.data
    }

}

const createStore = (options) => {
    // 实例化
    return new Store(options)
}

export { createStore }