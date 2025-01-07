// 創建一個路由器，並暴露出去

// 第一步：引入createRouter
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
// 引入組件（路由組件）
import Home from "@/view/Home.vue"
import News from "@/view/News.vue"
import About from "@/view/About.vue"
import Detail from "@/view/Detail.vue";

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
      children:[
        {
          name:"Detail",
          path:"detail/:id/:title/:content?", //加?代表這個參數是可選的
          component:Detail,

          // 第一種寫法，將路由收到的所有【params】參數作爲props傳個路由組件
          // props: true

          // 第二種寫法，函數寫法可以自己決定將什麽作爲props傳個路由組件
          props(route) {
            return route.params
            // return route.query
          },

          // 第三種寫法，對象寫法，少用，因爲參數是固定的，不能動態改變
          // props:{
          //   id:'000',
          //   title:'test',
          //   content:'test'
          // }
        }
      ]
    },
    {
      name: "About",
      path: "/about",
      component: About,
    },
    {
      path:'/',
      redirect:'Home' // 重定向，將一個路徑指向另一個路徑
    }
  ],
});

export default router
