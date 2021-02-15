<template>
  <div id="app">
    <nav-tab></nav-tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import NavTab from "c/navTab/navTab"
import TabBar from "c/tabBar/tabBar"

export default {
  name: 'app',
  components:{
    TabBar,NavTab
  },
 
}
</script>

<style lang="scss">
 
</style>
