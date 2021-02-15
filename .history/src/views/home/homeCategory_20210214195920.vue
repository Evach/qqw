<template>
  <div class="home_category">
      <ul>
          <li v-for="(item,index) in category" :key="index">
              <a href="'#'+item.jumpUrl">
                  <img src="item.address" alt="item.name">
                  <p>item.name</p>
              </a>
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
        console.log(this.category)
    },
}
</script>

<style>

</style>