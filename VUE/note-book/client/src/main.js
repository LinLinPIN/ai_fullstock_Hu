import { createApp } from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible.js'
import './assets/style/reset.css'
import 'vant/lib/index.css';
import router from './router';

const app = createApp(App)

app.use(router)
app.mount('#app')
