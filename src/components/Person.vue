<template>
  <div class="person">
    姓： <input type="text" v-model="firstName"> <br>
    名： <input type="text" v-model="lastName"> <br>
    全名： <span>{{fullName}}</span> <br>
    <button @click="changeFullName">改變fullname</button> <br>
  </div>
</template>

<script setup name="Person" lang="ts">
  import { ref, computed } from 'vue';
  let firstName = ref('劉')
  let lastName = ref('耀凱')

  let fullName = computed({
    get(){
      return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
    },
    set(val){
      const [str1, str2] = val.split('-')
      firstName.value = str1
      lastName.value = str2
    }
  })
  function changeFullName(){
    fullName.value = '陳-翠連'
  }
</script>




<style>
  .person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    paDDING: 20px;
  }
</style>
