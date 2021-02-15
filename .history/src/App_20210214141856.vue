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
import * as api from "@/api/home.js"
export default {
  name: 'app',
  components:{
    TabBar,NavTab
  },
  async mounted(){
   
    const result = await api.getHotMovies()
    console.log(result)
    const result2 = await api.getBanner()
    console.log(result2)
  }
}
</script>

<style lang="scss">
 
</style>
