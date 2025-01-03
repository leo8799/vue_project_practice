<template>
  <div class="person">
    <!-- v-for 屬性後面接循環代碼，類似JS跟Py的for循環寫法 -->
    <!-- :key 用來唯一指定數組成員，若沒有指定則通過數組下標來指定 -->
    <!-- v-for 非常智能，若傳入的list為空，則該標簽自動失效 -->
    <ul>
      <li v-for="item in list" :key="item.id">{{ item.name }} -- {{ item.age }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="props">
  import type { Persons } from '@/types';

  // 接收父組件傳過來的值
  // defineProps(['a'])

  //接受props + 限制類型 + 限制必要性 + 指定默認值
  withDefaults(defineProps<{list?:Persons}>(),{
    list:()=>[{id:'000', name: 'default', age:0}]
  })
</script>

<style scoped>
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    paDDING: 20px;
  }
</style>
