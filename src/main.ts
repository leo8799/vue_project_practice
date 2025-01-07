import {createApp} from 'vue'
import App from './App.vue'
// 引入路由器
import router from './router'
// 引入pinia
import { createPinia } from 'pinia'


const app = createApp(App)
const pinia = createPinia()
// 使用路由器
app.use(router)
// 創建pinia
app.use(pinia)

app.mount('#app')
