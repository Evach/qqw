import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { NavBar } from 'vant';

// import 'lib-flexible/flexible'//引入rem自适应

Vue.config.productionTip = false

Vue.use(NavBar);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
