<template>
  <div class="major">
    <button @click="getMajor">點我增加科系</button>
    <ul>
      <li v-for="major in majorList" :key="major.id">{{ major.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="Major">
  import { useMajorStore } from '@/store/Major';
  import { storeToRefs } from 'pinia';
  // 組合式寫法
  const {majorList, getMajor, $subscribe} = useMajorStore()

  $subscribe((mustate, state)=>{
    localStorage.setItem('majorList', JSON.stringify(state.majorList))
  })

  // 選項式寫法
  // let majorStore = useMajorStore()
  // let {majorList} = storeToRefs(majorStore)
  // $subscribe 類似watch的用法，以下代碼實現功能是當state裏的數據改變時，備份數據到localStorage
  // majorStore.$subscribe((mustate, state)=>{
  //   localStorage.setItem('majorList', JSON.stringify(state.majorList))
  // })

  // function getMajor(){
  //   majorStore.getMajor()
  // }
</script>

<style lang="css" scoped>
  .major{
    background-color: orange;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
</style>
