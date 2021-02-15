<template>
  <div class="banner">
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(item) in bannerList" :key="item.id" class="banner_item">
                <img v-lazy="item.pic" />
            </van-swipe-item>
        </van-swipe>
  </div>
</template>

<script>
import * as api from "@/api/home.js"
import Vue from 'vue';
import { Swipe, SwipeItem , Lazyload} from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
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

<style lang="scss" scoped>
.banner{
    padding: 0 .1rem;

    .banner_item{
        overflow: hidden;
        height: 1.4rem;
        border-radius: .1rem;

        img{
            
        }
    }
}
</style>