<template>
  <div class="count">
    <h2>當前求和為：{{ countStore.sum }}</h2>
    <h3>歡迎來到：{{ countStore.school }} 坐落於：{{ countStore.address }}</h3>
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
    // 第一種方法
    // countStore.sum += n.value

    // 第二種方法 批量修改只有一次事件，適合數據較多的時候使用，性能較好
    // countStore.$patch({
    //   sum: 100,
    //   school: 'national central university',
    //   address: 'taoyuan zhongli zhongda Road.'
    // })

    // 第三種方法 action方法
    countStore.add(n.value, 'national central university', 'taoyuan zhongli zhongda Road.')
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
