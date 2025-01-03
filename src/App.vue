<template>
  <div class="app">
    <h1 ref="city">你好啊！</h1>
    <button @click="showLog">展示標簽ref屬性為city和son的父組件的文本内容</button>
    <!-- <Person></Person> -->
    <!-- <watch></watch> -->
    <!-- <watchEffect></watchEffect> -->
    <h2>ref屬性應用在vue組件標簽上，則展示組件實例對象的内容</h2>
    <RefProperties ref="son"></RefProperties>
  </div>
</template>

<script lang="ts" setup name="App">
  import Person from './components/Person.vue';
  import watch from './components/watch.vue';
  import watchEffect from './components/watchEffect.vue';
  import RefProperties from './components/refProperties.vue';
  import { ref } from 'vue';

  let city = ref()
  let son = ref()
  function showLog(){
    console.log(city.value, son.value)
  }
</script>

<style>
  .app {
    background-color: #ddd;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    paDDING: 20px;
  }
</style>
