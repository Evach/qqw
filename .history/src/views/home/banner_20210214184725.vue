<template>
  <div class="banner">

  </div>
</template>

<script>
import * as api from "@/api/home.js"
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';

this.vue.use(Swipe);
this.vue.use(SwipeItem);
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