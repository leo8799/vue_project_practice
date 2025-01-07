<template>
  <div class="news">
    <!-- 導航區 -->
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <!-- params傳參不能傳對象和數組 -->
        <!-- 第一種寫法 -->
        <!-- <RouterLink :to="`/news/detail/${news.id}/${news.title}/${news.content}`">{{ news.title }}</RouterLink> -->

        <!-- 第二種寫法 -->
        <RouterLink
          :to="{
            name:'Detail',
            params:{
              id:news.id,
              title:news.title,
              content:news.content
            }
          }"
        >
          {{ news.title }}
        </RouterLink>

        <!-- 第三種寫法 -->
        <!-- <RouterLink
          :to="{
            name:'Detail',
            query:{
              id:news.id,
              title:news.title,
              content:news.content
            }
          }"
        >
          {{ news.title }}
        </RouterLink> -->
      </li>
    </ul>
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts" name="News">
  import { reactive } from 'vue';

  const newsList = reactive([
    {id: '001', title: '2025CVPR！！！', content: '資訊工程學院研究成果登上2025CVPR'},
    {id: '002', title: '碩士甄試招生開始', content: '10月1號開始！'},
    {id: '003', title: '碩士考試招生開始', content: '12月1號開始報名！'},
    {id: '004', title: '畢業典禮開始！！', content: '畢業快樂！！！！'},
  ])
</script>

<style scoped>
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}
.news ul{
  margin-top:30px;
  list-style: none;
  padding-left:10px;
}
.news li>a{
  font-size: 18px;
  line-height: 40px;
  text-decoration:none;
  color:#64967E;
  text-shadow:0 0 1px rgb(0, 84, 0)
}
.news-content{
  width:78%;
  height: 90%;
  border:1px solid;
  margin-top:20px;
  border-radius:18px;
}
</style>
