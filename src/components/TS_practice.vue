<template>
  <div class="person">
    <h1>{{person}}</h1>
    <ul>
      <li>{{ personList[0] }}</li>
      <li>{{ personList[1] }}</li>
      <li>{{ personList[2] }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="TS_practice">
  import { type PersonInter, type Persons } from '@/types';

  let person:PersonInter = {id: '001', name: '劉耀凱', age: 20}

  let personList:Persons = [
    {id:'002', name: 'test1', age: 21},
    {id:'003', name: 'test2', age: 22},
    {id:'004', name: 'test3', age: 23}
  ]
</script>

<style scoped>
  .person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    paDDING: 20px;
  }
</style>
