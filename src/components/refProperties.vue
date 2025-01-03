<template>
  <div class="person">
    <h1>中華民國</h1>
    <h2 ref="city">桃園</h2>
    <h3>國立中央大學</h3>
    <button @click="showLog">展示標簽ref屬性為city的子組件的文本内容</button>
    <h3>想要獲取h2標簽的文本需要獲取h2的DOM，傳統的JS方法是使用標簽的id屬性唯一指定DOM</h3>
    <h3>傳統方法的局限在於vue的網頁是由多個組件嵌套而成的，若兩個組件内存在一樣的id，則可能會衝突</h3>
    <h3>ref屬性可以很好的解決以上問題，ref的作用域僅當前組件</h3>
  </div>
</template>

<script lang="ts" setup name="refProperties">
  import { ref } from 'vue';

  // 變量名需要跟標簽的ref屬性的值一樣
  let city =ref()

  function showLog(){
    console.log(city.value)
  }
  // 該函數負責指定要將組件實例對象的哪一個成員暴露（給父組件或其他組件）出去
  defineExpose({city})
</script>

<!-- scoped為style標簽的局部樣式屬性，加上該屬性，則以下樣式只作用在當前組件 -->
<style scoped>
  .person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    paDDING: 20px;
  }
</style>
