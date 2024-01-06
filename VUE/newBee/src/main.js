import { createApp } from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import './assets/style/reset.css'
import router from './router'

// 1. 引入你需要的组件
import { Button,Skeleton } from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';
import { Swipe, SwipeItem } from 'vant';

import { Tabbar, TabbarItem } from 'vant';

const app = createApp(App)
app.use(Button)
app.use(router)
app.use(Swipe);
app.use(SwipeItem);
app.use(Skeleton)
app.use(Tabbar);
app.use(TabbarItem);
app.mount('#app')
