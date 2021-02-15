<template>
  <div class="banner">

  </div>
</template>

<script>
import * as api from "@/api/home.js"
export default {
    name:"Banner",
    data(){
        return {
            bannerList: null
        }
    },
    async mounted(){
        // const result = await api.getHotMovies()
        // console.log(result)
        const result = await api.getBanner()
        console.log(result)
        // this.bannerList = 
    }
}
</script>

<style>

</style>