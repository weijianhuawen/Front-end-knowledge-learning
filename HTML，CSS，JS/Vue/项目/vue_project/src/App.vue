<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">你好!Vue</router-link> |
      <router-link to="/about">关于Vue</router-link>
    </nav> -->  
    <!-- {{message}} -->

    <!-- //展示view目录下的ElementView文件 -->
    <!-- <element-view> </element-view> -->
    <!-- <emp-view></emp-view> -->
    <router-view></router-view>
    <!-- <router-view/> -->
  </div>
</template>

<script>
// import ElementView from './views/ElementView.vue'
// import EmpView from './views/tlias/EmpView.vue'
export default {
  components: {},
  data() {
    return {
      message: "你好！Vue!"
    }
  }
}
</script>

<style>
/* #app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
