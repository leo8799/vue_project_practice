<template>
  <div class="child">
    <h3>子組件</h3>
		<h4>玩具：{{ toy }}</h4>
		<button @click="emit('send-toy',toy)">測試</button>
  </div>
</template>

<script setup lang="ts" name="Child">
	import { ref } from "vue";
	// 數據
	let toy = ref('robot')
	// 聲明事件
	const emit =  defineEmits(['send-toy'])
</script>

<style scoped>
	.child{
		margin-top: 10px;
		background-color: rgb(76, 209, 76);
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>
