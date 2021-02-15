<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import NavBar from "c/navBar"
import TabBar from "c/tabBar/tabBar"

export default {
  name: 'app',
  components:{
    TabBar,NavBar
  },
 
}
</script>

<style lang="scss">
 
</style>
