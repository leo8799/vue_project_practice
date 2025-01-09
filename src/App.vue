<template>
  <div class="container-fluid wraper">
    <h1 class="title">
      Vue3 組件通信
    </h1>
    <hr>
    <div class="row">
      <div class="col-xs-3 col-md-3 col-lg-3 col-xl-3">
        <!-- 導航區 -->
        <RouterLink active-class="active" class="list-group-item" to="/props">1.Props</RouterLink>
        <RouterLink active-class="active" class="list-group-item" to="/event">2.Event</RouterLink>
        <RouterLink active-class="active" class="list-group-item" to="/mitt">3.Mitt</RouterLink>
        <RouterLink active-class="active" class="list-group-item" to="/model">4.Model</RouterLink>
        <RouterLink active-class="active" class="list-group-item" to="/attrs">5.Attrs</RouterLink>
        <RouterLink active-class="active" class="list-group-item" to="/ref-parent">6.Ref</RouterLink>
        <RouterLink active-class="active" class="list-group-item" to="/provide-inject">7.Provide</RouterLink>
        <RouterLink active-class="active" class="list-group-item" to="/pinia">8.Pinia</RouterLink>
        <RouterLink active-class="active" class="list-group-item" to="/slot">9.Slot</RouterLink>
      </div>
      <div class="col-xs-9 col-md-9 col-lg-9 col-xl-9">
        <div class="panel-body">
          <!-- 展位一個展示區 -->
          <RouterView></RouterView>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="App">

</script>

<style scoped>
  .title {
    text-align: center;
    word-spacing: 5px;
    margin:30px ;
    height:70px;
    line-height: 70px;
    background-image:linear-gradient(45deg,gray, white);
    border-radius:10px;
    box-shadow:0 0 2px;
    font-size:30px;
  }
  .navigate {
    display: flex;
    justify-content: space-around;
    margin: 0 100px;
  }
  .navigate a {
    display: block;
    text-align:center;
    width: 90px;
    height: 40px;
    line-height:40px;
    border-radius:10px;
    background-color:gray;
    text-decoration:none;
    color: white;
    font-size:18px;
    letter-spacing:5px;
  }
  .navigate a.active {
    background-color:#64967E;
    color:#ffc268;
    font-weight: 900;
    text-shadow:0 0 1px black;
    font-family:微软雅黑;
  }
  .main-content {
    margin:0 auto;
    margin-top:30px;
    border-radius:10px;
    width: 90%;
    height: 400px;
    border:1px solid;
  }
</style>
