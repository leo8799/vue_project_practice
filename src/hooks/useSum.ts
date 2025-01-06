import { computed, onBeforeMount, ref } from "vue";

export default function(){
  let sum = ref(0);
  let bigSum = computed(()=>{
    return sum.value * 10
  })

  function add(){
    sum.value += 1
  }

  onBeforeMount(()=>{
    add()
  })

  return{sum, bigSum, add}
}


