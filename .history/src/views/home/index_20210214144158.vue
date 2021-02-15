<template>
    <div id="home">
        <h1>首页</h1>
    </div>
</template>

<script>
import * as api from "@/api/home.js"
export default {
    name:"Home",
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