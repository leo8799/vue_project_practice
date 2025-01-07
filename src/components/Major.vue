<template>
  <div class="major">
    <button @click="getMajor">點我增加科系</button>
    <ul>
      <li v-for="major in majorStore.majorList" :key="major.id">{{ major.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="Major">
  import { nanoid } from 'nanoid';
  import { useMajorStore } from '@/store/Major';

  const majorStore = useMajorStore()

  function getMajor(){
    let obj = {id: nanoid(), name:'測試'}
    majorStore.majorList.unshift(obj)
  }
</script>

<style lang="css" scoped>
  .major{
    background-color: orange;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
</style>
