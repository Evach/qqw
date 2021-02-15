<template>
    <div id="home">
        <nav-bar><div slot="center">首页</div></nav-bar>
        <div class="main">
            <div class="banner_bg"></div>
            <banner></banner>
        </div>
       

      
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
.main{
    position: relative;
    .banner_bg{
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 1rem;
        border-radius: 0 0 50% 50%;
        background: rgb(191, 0, 0);
    }
}

</style>