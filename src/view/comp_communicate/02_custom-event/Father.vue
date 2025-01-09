<template>
  <div class="father">
    <h3>父組件</h3>
		<h4 v-show="toy">子給的玩具：{{ toy }}</h4>
		<!-- 給子組件Child綁定事件 -->
    <Child @send-toy="saveToy"/>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Child from './Child.vue'
	import { ref } from "vue";
	// 數據
	let toy = ref('')
	// 用於保存傳遞過來的玩具
	function saveToy(value:string){
		console.log('saveToy',value)
		toy.value = value
	}
</script>

<style scoped>
	.father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
    border-radius: 10px;
	}
	.father button{
		margin-right: 5px;
	}
</style>
