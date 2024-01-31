import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import './assets/style/reset.css'
import 'vant/lib/index.css';
import { Button, Form, Field, CellGroup, FloatingPanel, PasswordInput, NumberKeyboard, NavBar, Dialog, showToast, ActionSheet, Swipe, SwipeItem, ActionBar, ActionBarIcon, ActionBarButton } from 'vant';
import axios from 'axios'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(Swipe);
app.use(SwipeItem);
app.use(ActionBar);
app.use(ActionBarIcon);
app.use(ActionBarButton);
app.use(ActionSheet);
app.use(Button);
app.use(NavBar);
app.use(Dialog);
app.use(NumberKeyboard);
app.use(FloatingPanel);
app.use(PasswordInput);
app.use(Form);
app.use(Field);
app.use(CellGroup);

app.mount('#app')
