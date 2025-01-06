<template>
  <div class="life">
    <h2>sum={{ sum }}</h2>
    <button @click="add">sum+1</button>
  </div>
</template>

<script lang="ts" setup name="lifePeriod">
  import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';

  let sum = ref(0)

  function add(){
    sum.value += 1
  }

  console.log('組件創建')

  onBeforeMount(()=>{
    console.log('組件挂載前')
  })
  onMounted(()=>{
    console.log('組件挂載后')
  })
  onBeforeUpdate(()=>{
    console.log('組件更新前')
  })
  onUpdated(()=>{
    console.log('組件更新后')
  })
  onBeforeUnmount(()=>{
    console.log('組件卸載前')
  })
  onUnmounted(()=>{
    console.log('組件卸載後')
  })
</script>

<style>
  .life {
    background-color: #ddd;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    paDDING: 20px;
  }
</style>
