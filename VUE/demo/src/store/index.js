import { createStore } from 'vuex'

export default createStore({
  state: {
    isLogin: false
  },
  getters: {
  },
  mutations: {
    changeLoginState() {
      if (localStorage.getItem('token')) {
        this.state.isLogin = true
      } else {
        this.state.isLogin = false
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
