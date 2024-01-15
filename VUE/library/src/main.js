import { createApp } from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import './assets/style/reset.css'
import router from './router'
import { Tabbar,Tag, TabbarItem,Search,Tab, Tabs,Icon,Swipe, SwipeItem } from 'vant'
import 'vant/lib/index.css'

const app = createApp(App)

app.use(router);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Search);
app.use(Tab);
app.use(Tabs);
app.use(Icon);
app.use(Swipe);
app.use(SwipeItem);
app.use(Tag);

app.mount('#app')
