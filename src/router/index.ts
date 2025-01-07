// 創建一個路由器，並暴露出去

// 第一步：引入createRouter
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
// 引入組件（路由組件）
import Home from "@/view/Home.vue"
import News from "@/view/News.vue"
import About from "@/view/About.vue"

const router = createRouter({
  // 路由器的工作模式分爲history模式、hash模式
  // history的url不帶#但是需要後端配合路徑
  // hash的url帶#號但是不需要後端配合路徑，且在SEO方面優化較差
  // history: createWebHashHistory(), hash模式
  history: createWebHistory(),
  routes: [
    //路由規則
    {
      name: "Home",
      path: "/home",
      component: Home,
    },
    {
      name: "News",
      path: "/news",
      component: News,
    },
    {
      name: "About",
      path: "/about",
      component: About,
    },
  ],
});

export default router
