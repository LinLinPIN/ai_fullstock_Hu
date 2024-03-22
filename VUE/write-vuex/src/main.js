import { createApp } from 'vue'
// vue只负责响应式和组件 VDOM
// 其他交给生态
// use
// store.install(app)
import './style.css'
import App from './App.vue'
import store from './store'

const app = createApp(App)
app.use(store)
app.mount('#app')
