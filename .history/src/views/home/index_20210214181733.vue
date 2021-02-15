<template>
    <div id="home">
        <nav-bar><div slot="center">首页</div></nav-bar>

      
    </div>
</template>

<script>
import NavBar from "c/navBar"
import * as api from "@/api/home.js"
export default {
    name:"Home",
    components: {
        NavBar
    },
    async mounted(){
        // const result = await api.getHotMovies()
        // console.log(result)
        const result2 = await api.getBanner()
        console.log(result2)
    }
}
</script>
 
<style lang="scss" scoped>

</style>