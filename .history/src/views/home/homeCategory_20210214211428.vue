<template>
  <div class="home_category">
      <ul class="home_category_list">
          <!-- <li v-for="(items, index) in category" :key="index">
              <a href="#">
                  <img src="items.address" alt="">
                  <p>items.name</p>
              </a>
          </li> -->
          <li v-for="(item, i) in category" :key="i">
              <img :src="item.address" alt="">
              <p>{{item.name}}</p>
          </li>
      </ul>
  </div>
</template>

<script>
import * as api from "@/api/home"
export default {
    name:"HomeCategory",
    data(){
        return{
            category:null
        }
    },
    async created() {
        const result = await api.getHomeApi({
            entityId: 4,
            modelId: 27386,
            proModelId: 2,
            source: 3,
            version: 'v1',
            tuserId: 771131,
            isWechat: 0,
        })
        this.category = result.data.config.data
        console.log(this.category[0].address)
    },
}
</script>

<style lang="scss" scoped>
.home_category_list{
    display: flex;
    flex-wrap: wrap;

    padding-top: .05rem;
    margin: 0 .1rem;
    background: #fff;

    li{
        width: 20%;
        margin-bottom: .05rem;
        text-align: center;
        img{
            width: .5rem;
            height: .5rem;
        }
    }
}
</style>