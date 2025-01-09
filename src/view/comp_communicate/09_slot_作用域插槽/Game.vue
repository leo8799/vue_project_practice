<template>
  <div class="game">
    <h2>游戲列表</h2>
    <slot :youxi="games" x="哈哈" y="你好"></slot>
  </div>
</template>

<script setup lang="ts" name="Game">
  import {reactive} from 'vue'
  let games = reactive([
    {id:'asgytdfats01',name:'英雄聯盟'},
    {id:'asgytdfats02',name:'DOTA'},
    {id:'asgytdfats03',name:'世紀帝國'},
    {id:'asgytdfats04',name:'三國演義'}
  ])
</script>

<style scoped>
  .game {
    width: 200px;
    height: 300px;
    background-color: skyblue;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
  h2 {
    background-color: orange;
    text-align: center;
    font-size: 20px;
    font-weight: 800;
  }
</style>
