<template>
  <div class="home_category">
      <ul>
          <!-- <li v-for="(items, index) in category" :key="index">
              <a href="#">
                  <img src="items.address" alt="">
                  <p>items.name</p>
              </a>
          </li> -->
          <li v-for="(item, i) in categroy" :key="i">
              <img src="item.address" alt="">
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
    async mounted() {
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

<style>

</style>