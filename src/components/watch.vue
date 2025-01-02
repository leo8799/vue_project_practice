<template>
  <div class="watch">
    <h1>監視【ref】定義的【基本類型】數據</h1>
    <h2>當前求和為：{{ sum }}</h2>
    <button @click="changeSum">點我sum+1</button>
    <h1>監視【ref】定義的【對象類型】數據</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年齡：{{ person.age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年齡</button>
    <button @click="changePerson">修改整個人</button>
    <h1>監視【reactive】定義的【對象類型】數據</h1>
    <h2>姓名：{{ person_reactive.name }}</h2>
    <h2>年齡：{{ person_reactive.age }}</h2>
    <button @click="changeName_reactive">修改名字</button>
    <button @click="changeAge_reactive">修改年齡</button>
    <button @click="changePerson_reactive">修改整個人</button>
    <h1>監視【ref】或【reactive】定義的【對象類型】數據中的某個屬性</h1>
    <h2>若該屬性不是【對象類型】，需要寫成函數形式</h2>
    <h2>若該屬性依然是【對象類型】，可直接編，也可以寫成函數形式，不過建議寫成函數形式（返回地址）</h2>
    <h2>如果監視的對象是地址值，想知道對象裏面成員的具體細節，需要手動開啓deep參數為：true</h2>
    <h2>姓名：{{ person_with_car.name }}</h2>
    <h2>年齡：{{ person_with_car.age }}</h2>
    <h2>汽車：{{ person_with_car.car.c1 }}、{{ person_with_car.car.c2 }}</h2>
    <button @click="change_person_with_car_name">修改名字</button>
    <button @click="change_person_with_car_age">修改年齡</button>
    <button @click="change_person_with_car_c1">修改車1</button>
    <button @click="change_person_with_car_c2">修改車2</button>
    <button @click="change_person_with_car_car">修改兩臺車</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import { reactive, ref, watch } from 'vue';
  let sum = ref(0)

  let person = ref({
    name: '劉耀凱',
    age: 10
  })

  let person_reactive = reactive({
    name: 'liu-yaokai',
    age: 20
  })

  let person_with_car = reactive({
    name: '劉耀凱',
    age: 18,
    car:{
      c1: '特斯拉',
      c2: '小米'
    }
  })

  function changeSum(){
    sum.value += 1
  }
  function changeName(){
    person.value.name += '~'
  }
  function changeAge(){
    person.value.age += 1
  }
  function changePerson(){
    person.value = {name: '陳翠連', age: 18}
  }

  function changeName_reactive(){
    person_reactive.name += '~'
  }
  function changeAge_reactive(){
    person_reactive.age += 1
  }
  function changePerson_reactive(){
    Object.assign(person_reactive, {name: 'chen-cuilian', age: 18})
  }

  function change_person_with_car_name(){
    person_with_car.name += '~'
  }
  function change_person_with_car_age(){
    person_with_car.age += 1
  }
  function change_person_with_car_c1(){
    person_with_car.car.c1 = '藍寶堅尼'
  }
  function change_person_with_car_c2(){
    person_with_car.car.c2 = '瑪莎拉蒂'
  }
  function change_person_with_car_car(){
    person_with_car.car = {c1: '法拉利', c2: '勞斯萊斯'}
  }

  const stopWatch = watch(sum, (newValue, oldValue)=>{
    console.log('sum變化了', newValue, oldValue)
    if(newValue >= 10){
      stopWatch()
    }
  })

  watch(person, (newValue, oldValue)=>{
    console.log('person變化了', newValue, oldValue)
  }, {deep:true, immediate:true})

  watch(person_reactive, (newValue, oldValue)=>{
    console.log('person_reactive變化了', newValue, oldValue)
  })

  watch(()=>{return person_with_car.name}, (newValue, oldValue)=>{
    console.log('person_with_cat.name變化了', newValue, oldValue)
  })

  watch(()=>person_with_car.car, (newValue, oldValue)=>{
    console.log('person_with_cat.car變化了', newValue, oldValue)
  }, {deep:true})

  watch([person, person_with_car],(newNvalue, oldValue)=>{
    console.log('有車的人或沒車的人改變了', newNvalue, oldValue)
  }, {deep:true})
</script>

<style>
  .watch {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    paDDING: 20px;
  }
</style>
