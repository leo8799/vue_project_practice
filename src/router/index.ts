// 創建一個路由器，並暴露出去

// 第一步：引入createRouter
import { createRouter, createWebHistory } from "vue-router";
// 引入組件（路由組件）
import Home from "@/components/Home.vue"
import News from "@/components/News.vue"
import About from "@/components/About.vue"

const router = createRouter({
  history: createWebHistory(), //路由器的工作模式
  routes: [ //路由規則
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/news",
      component: News,
    },
    {
      path: "/about",
      component: About,
    }
  ],
});

export default router
