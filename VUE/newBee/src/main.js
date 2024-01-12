import { createApp } from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import './assets/style/reset.css'
import router from './router'
import store from './store'


import 'vant/lib/index.css';
import { Swipe, SwipeItem,Button,Skeleton,Tabbar, TabbarItem,Icon } from 'vant';
import { ActionBar, ActionBarIcon, ActionBarButton,Form, Field, CellGroup } from 'vant';
import { SwipeCell,Card,Checkbox, CheckboxGroup,Stepper,SubmitBar } from 'vant';


const app = createApp(App)
app.use(Button)
app.use(router)
app.use(Swipe);
app.use(SwipeItem);
app.use(Skeleton)
app.use(Tabbar);
app.use(TabbarItem);
app.use(Icon);
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(ActionBar);
app.use(ActionBarIcon);
app.use(ActionBarButton);
app.use(store)
app.use(SwipeCell)
app.use(Card)
app.use(Checkbox);
app.use(CheckboxGroup);
app.use(Stepper);
app.use(SubmitBar);
app.mount('#app')
