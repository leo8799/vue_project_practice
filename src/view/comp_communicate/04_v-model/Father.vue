<template>
  <div class="father">
    <h3>父組件</h3>
    <h4>{{ username }}</h4>
    <h4>{{ password }}</h4>
    <!-- v-model用在html標簽上 -->
    <!-- <input type="text" v-model="username"> -->
    <!-- <input type="text" :value="username" @input="username = (<HTMLInputElement>$event.target).value"> -->

    <!-- v-model用在組件標簽上 -->
    <!-- <CentralUniversity v-model="username"/> -->
    <!-- <CentralUniversity
      :modelValue="username"
      @update:modelValue="username = $event"
    /> -->

    <!-- 修改modelValue -->
    <CentralUniversity v-model:ming="username" v-model:mima="password"/>
  </div>
</template>

<script setup lang="ts" name="Father">
	import { ref } from "vue";
  import CentralUniversity from './CentralUniversity.vue'
  // 數據
  let username = ref('liuyaokai')
  let password = ref('123456')
</script>

<style scoped>
.father {
  padding: 20px;
  background-color: rgb(165, 164, 164);
  border-radius: 10px;
}
</style>
