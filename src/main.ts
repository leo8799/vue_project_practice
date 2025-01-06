import {createApp} from 'vue'
import App from './App.vue'
// 引入路由器
import router from './router'


const app = createApp(App)
// 使用路由器
app.use(router)

app.mount('#app')
