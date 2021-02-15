<template>
    <div class="tabBar" id="TabBar">
        <tab-bar-item path="/home" ontextColor="rgb(253, 87, 92)">
            <img src="~a/img/home/f0.png" alt="" slot="item-icon">
            <img src="~a/img/home/f0-on.png" alt="" slot="item-icon-on">
            <div slot="item-text" >首页</div>
        </tab-bar-item>
        <tab-bar-item path="/pinkage" ontextColor="rgb(253, 87, 92)">
            <img src="~a/img/home/f0.png" alt="" slot="item-icon">
            <img src="~a/img/home/f0-on.png" alt="" slot="item-icon-on">
            <div slot="item-text">9.9包邮</div>
        </tab-bar-item>
        <tab-bar-item path="/category" ontextColor="rgb(253, 87, 92)">
            <img src="~a/img/home/f0.png" alt="" slot="item-icon">
            <img src="~a/img/home/f0-on.png" alt="" slot="item-icon-on">
            <div slot="item-text">分类</div>
        </tab-bar-item>
         <tab-bar-item path="/collect" ontextColor="rgb(253, 87, 92)">
            <img src="~a/img/home/f0.png" alt="" slot="item-icon">
            <img src="~a/img/home/f0-on.png" alt="" slot="item-icon-on">
            <div slot="item-text">收藏</div>
        </tab-bar-item>
         <tab-bar-item path="/profile" ontextColor="rgb(253, 87, 92)">
            <img src="~a/img/home/f0.png" alt="" slot="item-icon">
            <img src="~a/img/home/f0-on.png" alt="" slot="item-icon-on">
            <div slot="item-text" >我的</div>
        </tab-bar-item>
    </div>
</template>

<script>
import TabBarItem from "c/tabBar/tabBarItem"
export default {
    name:"TabBar",
    components:{
        TabBarItem
    }
}
</script>

<style lang="scss" scoped>
.tabBar{
    display: flex;
    width: 100%;
    height: 49px;

    position: fixed;
    bottom: 0;
    left: 0;

    background: #f5f5f5;
    box-shadow: 0 -2px 3px rgba(100, 100, 100, .2);
    .tab-bar-item{
        flex: 1;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
       
    }
}
</style>