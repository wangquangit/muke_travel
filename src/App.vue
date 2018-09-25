<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <keep-alive>
      <!-- 请求过的内容加载到内存中,下次不会重复请求 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
