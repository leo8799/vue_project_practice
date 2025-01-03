<template>
  <div class="app">
    <!-- 加:則後面的字符串内容會轉爲標識符 -->
    <!-- <h2 a="1+1" :b="1+1" c="x" :d="x">該標簽有四個props（屬性）</h2> -->
    <!-- vue組件標簽的props屬性會傳遞給子組件，子組件可以編寫對應代碼覺得要不要接受，以及限制傳遞的數據類型 -->
    <props a="哈哈" :list="personList"></props>
  </div>
</template>

<script lang="ts" setup name="App">
  import { reactive } from 'vue';
  import { type Persons } from './types';
  import props from './components/props.vue';

  let x = 9

  // 標識符+<???>代表泛型，限制了數據類型
  let personList = reactive<Persons>([
  {id:'001', name: 'liuyaokai', age: 18},
  {id:'002', name: 'liuyaokai', age: 18},
  {id:'003', name: 'liuyaokai', age: 18}
  ])
</script>

<style>
  .app {
    background-color: #ddd;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    paDDING: 20px;
  }
</style>
