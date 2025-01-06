<template>
  <div class="app">
    <!-- v-if 跟 v-show的區別在於，v-show不會卸載組件，只是將組件設爲不可視 -->
    <lifePeriod v-if="isShow"></lifePeriod>
  </div>
</template>

<script lang="ts" setup name="App">
  import lifePeriod from './components/lifePeriod.vue';
  import { onMounted, ref } from 'vue';

  let isShow = ref(true)


  onMounted(()=>{
    console.log('父組件挂載后')
  })
</script>

<style>
  .app {
    background-color: #ddd;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    paDDING: 20px;
  }
</style>
