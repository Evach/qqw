<template>
    <div id="home">
        <nav-bar><div slot="center">首页</div></nav-bar>
        <banner></banner>

      
    </div>
</template>

<script>
import NavBar from "c/navBar"
import Banner from './banner.vue'

export default {
    name:"Home",
    components: {
        NavBar,
        Banner
    },
   
}
</script>
 
<style lang="scss" scoped>

</style>