import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store'
import './assets/base.css'
import './assets/theme.css'

createApp(App).use(store).use(router).mount('#app')
