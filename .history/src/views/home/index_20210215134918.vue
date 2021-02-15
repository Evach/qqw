<template>
    <div id="home" class="page_wrapper">
        <nav-bar><div slot="center">首页</div></nav-bar>
        <div class="main">
            <div class="banner_bg"></div>
            <banner/>
            <home-category/>
        </div>
       

      
    </div>
</template>

<script>
import NavBar from "c/navBar"
import Banner from './banner'
import HomeCategory from "./homeCategory"

export default {
    name:"Home",
    components: {
        NavBar,
        Banner,
        HomeCategory
    },
   
}
</script>
 
<style lang="scss" scoped>
.main{
    position: relative;
    margin: .44rem 0 0;
    overflow-x: hidden;
    background: #F6F6F6;

    .banner_bg{
        position: absolute;
        top: -.11rem;
        left: -5%;

        width: 110%;
        height: 1rem;
        border-radius: 300vw;
        background: rgb(191, 0, 0);
    }
}

</style>