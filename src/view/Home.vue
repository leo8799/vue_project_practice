<template>
  <div class="home">
    <!-- 路由組件一般放在view or pages文件夾裏面 -->
    <!-- 通過點擊導航而消失的組件，默認是被卸載的，需要的時候再去挂載 -->
    <img src="http://www.atguigu.com/images/index_new/logo.png" alt="">
  </div>
</template>

<script setup lang="ts" name="Home">

</script>

<style scoped>
.home {
  display: flex;
  justify-content:center;
  align-items:center;
  height:100%;
}
</style>
