import { createStore } from './gvuex'

const store = createStore({
    // 为什么要以函数的形式创建state？
    // 不会污染组件对象
    state() {
        return {
            count: 1,
            todos: []
        }
    },
    getters: {
        double(state) {
            return state.count * 2
        }
    },
    // 状态的改变可以由mutation来记录
    mutations: {
        add(state) {
            state.count++
        },
        addTodos(state, payload) {
            state.todos.push(...payload)
        }
    },
    actions: {
        // UI组件部分 + 数据管理 API请求都在这
        asyncAdd({ commit }) {
            setTimeout(() => {
                commit('add')
            }, 1000)
        },
        add({ commit }) {
            commit('add')
        },
        fetchTodos: async ({ commit }) => {
            const todos = await getTodos();

        }
    }
})

export default store