<template>
  <div class="app">
    <h1>你好啊！</h1>
    <!-- <Person></Person> -->
    <watch></watch>
  </div>
</template>

<script lang="ts">
  import Person from './components/Person.vue';
  import watch from './components/watch.vue';
  export default{
    name: 'App',
    components: {Person, watch}
  }
</script>

<style>
  .app {
    background-color: #ddd;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    paDDING: 20px;
  }
</style>
