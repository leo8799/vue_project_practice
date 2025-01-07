<template>
  <div class="count">
    <h2>當前求和為：{{ countStore.sum }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">減</button>
  </div>
</template>

<script lang="ts" setup name="Count">
  import { useCountStore } from '@/store/Count';
  import { ref } from 'vue';

  const countStore = useCountStore()


  let n = ref(1)

  function add(){
    countStore.sum += n.value
  }
  function minus(){
    countStore.sum -= n.value
  }
</script>

<style lang="css" scoped>
  .count{
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
  select, button{
    margin: 0 5px;
    height: 25px;
  }
</style>
