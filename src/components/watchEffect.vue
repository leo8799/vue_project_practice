<template>
  <div class="watchEffect">
    <h1>watch和watchEffect的差別在於watch需要顯式的指定要監視的數據，watchEffect不需要指定，函數中用到哪種數據就監視哪種數據</h1>
    <h2>有一個bug？當用【或符號】監聽多個數據時，若第一個數據的條件已經滿足，則不管第二個數據的條件是否滿足，watchEffect都監聽不到</h2>
    <h2>需求：當水溫達到60度，或水位達到80cm時，給服務器發請求</h2>
    <h2>當前水溫：{{ temp }}℃</h2>
    <h2>當前水位：{{ height }}cm</h2>
    <button @click="changeTemp">點我水溫+1</button>
    <button @click="changeHeight">點我水位+10</button>
  </div>
</template>

<script lang="ts" setup name="watchEffect">
  import { ref, watchEffect } from 'vue';

  let temp = ref(10)
  let height = ref(0)

  function changeTemp(){
    temp.value += 1
  }

  function changeHeight(){
    height.value += 10
  }

  watchEffect(()=>{
    if(temp.value >= 30 || height.value >= 80){
      console.log('給服務器發請求')
    }
  })


</script>
