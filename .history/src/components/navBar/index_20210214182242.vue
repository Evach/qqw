<template>
    <div class="nav-bar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
    </div>
    
</template>

<script> 
export default {
  name:"NavBar",
  
  
}
</script>

<style lang="scss" scoped>
.nav-bar{
  display: flex;
  justify-content: center;
  align-items: center;

  height: .44rem;
  box-shadow: 0 1px 1px rgba(100,100,100,.1);
  background: linear-gradient(to left, #FE3C35 0, #FF1F4C 100%);

  .center{
    color: #fff;
    font-size: 16px;
  }
}
</style>

