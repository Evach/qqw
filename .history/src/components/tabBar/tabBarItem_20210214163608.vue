<template>
   <div class="tab-bar-item" id="TabBarItem" @click="tabTurn">
        <div class="item-img" v-if="isOn"> <slot name="item-icon-on"></slot></div>
        <div class="item-img" v-else> <slot name="item-icon"></slot></div>
        <div class="item-text" :style="isActiveColor"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
    name:"TabBarItem",
    props:{
        path:String,
        ontextColor:{
            type: String,
            default: "red"
        }
    },
    computed:{
        isOn(){
            return this.$route.path.indexOf(this.path) !== -1
        },
        isActiveColor(){
            return  this.isOn?{color:this.ontextColor}:{};
        }
        
    },
    methods: {
        tabTurn(){
            this.$router.push(this.path);
        }
    },
}
</script>

<style lang="scss" scoped>
.item-img{
    text-align: center;
    margin: .03rem 0 .02rem 0;
    img{
        width: .24rem;
        height: .24rem;
        vertical-align: middle;
    }
}
.item-text{
    text-align: center;
    font-size: 14px;
    color: rgb(102, 102, 102);
}
</style>
 