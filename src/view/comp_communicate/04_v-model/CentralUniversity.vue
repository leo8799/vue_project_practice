<template>
  <!-- $event什麽時候要.target
   對於原生事件，就是事件對象
   對於自定義事件，就是觸發事件時所傳遞的數據 -->
  <input
    type="text"
    :value="ming"
    @input="emit('update:ming',(<HTMLInputElement>$event.target).value)"
  >
  <br>
  <input
    type="text"
    :value="mima"
    @input="emit('update:mima',(<HTMLInputElement>$event.target).value)"
  >
</template>

<script setup lang="ts" name="CentralUniversity">
  defineProps(['ming','mima'])
  const emit = defineEmits(['update:ming','update:mima'])
</script>

<style scoped>
  input {
    border: 2px solid black;
    background-image: linear-gradient(45deg,red,yellow,green);
    height: 30px;
    font-size: 20px;
    color: white;
  }
</style>
