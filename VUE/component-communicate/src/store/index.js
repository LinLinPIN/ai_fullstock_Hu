import { createStore } from 'vuex'

const store = createStore({
    state(){    //相当于data数据源  公共的
        return {    
            lists:['html','css','js']
        }
    },mutations: { // methods
        addLists(state,msg) {   // mutations中定义的方法天生带有一个形参代表state
            state.lists.push(msg)
        }
    }
})

export default store