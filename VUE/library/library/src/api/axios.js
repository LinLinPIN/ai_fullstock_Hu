import axios from 'axios'
import { showFailToast } from 'vant';


// 将axios在封装一次，让之后项目中使用更便捷
axios.defaults.baseURL = 'https://mock.presstime.cn/mock/65a783da9358b0b690ce6939/library' // http://192.168.31.45:3000/home
axios.defaults.withCredentials = false // 是否允许在请求头中携带凭证
axios.defaults.headers['token'] = localStorage.getItem('token') || '';
axios.defaults.headers.post['Content-Type'] = 'application/json' // 告诉后端，所有post请求传递的参数都是json对象


export default axios



