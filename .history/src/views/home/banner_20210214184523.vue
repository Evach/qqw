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
    async created(){
        // const result = await api.getHotMovies()
        // console.log(result)
        import { Swipe, SwipeItem } from 'vant';

        Vue.use(Swipe);
        Vue.use(SwipeItem);
        const result = await api.getBanner()
        console.log(result)
        this.bannerList = result.data.config;
    }
}
</script>

<style>

</style>