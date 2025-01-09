<template>
  <div class="child2">
    <h3>子組件2</h3>
		<h4>電腦：{{ computer }}</h4>
		<h4>哥哥給的玩具：{{ toy }}</h4>
  </div>
</template>

<script setup lang="ts" name="Child2">
	import {ref,onUnmounted} from 'vue'
	import emitter from '@/utils/emitter';
	// 數據
	let computer = ref('Apple')
	let toy = ref('')

	// 給emitter綁定send-toy事件，誰接受數據誰綁定
	emitter.on('send-toy',(value:any)=>{
		toy.value = value
	})
	// 在組件卸載時解綁send-toy事件
	onUnmounted(()=>{
		emitter.off('send-toy')
	})
</script>

<style scoped>
	.child2{
		margin-top: 50px;
		background-color: orange;
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>
