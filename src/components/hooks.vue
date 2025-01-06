<template>
  <div class="hooks">
    <h2>當前求和為：{{ sum }}、乘以10倍：{{ bigSum }}</h2>
    <button @click="add">點我sum+1</button>
    <hr>
    <img v-for="(dog, index) in dogList" :src="dog" :key="index">
    <br>
    <button @click="getDog">再來一隻狗</button>
  </div>
</template>

<script lang="ts" setup name="hooks">
  import useDog from '@/hooks/useDog';
  import useSum from '@/hooks/useSum';

  let {sum, bigSum, add} = useSum()
  let {dogList, getDog} = useDog()
</script>

<style>
  .hooks {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    paDDING: 20px;
  }
  img{
    height: 200px;
    margin-right: 10px;
  }
</style>
