import { createStore } from 'vuex'
import { getCart } from '../api/cart.js'

const store = createStore({
    state:{// 全局公共的数据源 等同data 响应式的
        cartCount:0,
    },
    mutations:{// methods 专职修改state
        setCartCount(state,count){
            state.cartCount = count
        }
    },
    actions:{// async methods 可以放异步代码 专职调用mutation
        async setCartCountAction(ctx){
            const {data} = await getCart();
            console.log(data);
            ctx.commit('setCartCount',data.length)
        }
    },
    getters:{// computed

    }
})

export default store