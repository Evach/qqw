<template>
  <div class="banner">

  </div>
</template>

<script>
import * as api from "@/api/home.js"
      import { Swipe, SwipeItem } from 'vant';

        Vue.use(Swipe);
        Vue.use(SwipeItem);
export default {
    name:"Banner",
    data(){
        return {
            bannerList: null
        }
    },
    async created(){
        // const result = await api.getHotMovies()
        // console.log(result)
  
        const result = await api.getBanner()
        console.log(result)
        this.bannerList = result.data.config;
    }
}
</script>

<style>

</style>