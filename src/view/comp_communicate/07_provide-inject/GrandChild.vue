<template>
  <div class="grand-child">
    <h3>我是孫組件</h3>
    <h4>銀子：{{ money }}</h4>
    <h4>車子：一輛{{car.brand}}車，價值{{car.price}}萬元</h4>
    <button @click="updateMoney(6)">花爺爺的錢</button>
  </div>
</template>

<script setup lang="ts" name="GrandChild">
  import { inject } from "vue";

  let {money,updateMoney} = inject('moneyContext',{money:0,updateMoney:(param:number)=>{}})
  let car = inject('car',{brand:'未知',price:0})
</script>

<style scoped>
  .grand-child{
    background-color: orange;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px black;
  }
</style>
