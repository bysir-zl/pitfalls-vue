<template>
  <div id="app">
    <router-link :to="{path:'/dom-rerender'}">dom-rerender</router-link>
    <router-link :to="{path:'/el-slider-input'}">el-slider-input</router-link>
    <router-link :to="{path:'/el-slider-unresponsive-model'}">el-slider-unresponsive-model</router-link>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
