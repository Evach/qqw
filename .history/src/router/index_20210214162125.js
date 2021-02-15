import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import(/*webpackChunkName:'home'*/'v/home')
const Pinkage = () => import(/*webpackChunkName:'pinkage'*/'v/pinkage')
const Collect = () => import(/*webpackChunkName:'collect'*/'v/collect')
const Category = () => import(/*webpackChunkName:'category'*/'v/category')
const Profile = () => import(/*webpackChunkName:'profile'*/'v/profile')
const Error404 = () => import(/*webpackChunkName:'404'*/'v/404')

Vue.use(VueRouter)

//处理重复点击同一个选项再次触发push时 报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const routes = [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta:{
        title: "首页"
      }
    },
    {
      path: '/pinkage',
      name: 'Pinkage',
      component: Pinkage,
      meta:{
        title: "9.9包邮"
      }
    },
    {
      path: '/collect',
      name: 'Collect',
      component: Collect,
      meta:{
        title: "收藏"
      }
    },
    {
      path: '/category',
      name: 'Category',
      component: Category,
      meta:{
        title: "分类"
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta:{
        title: "我的"
      }
    },
  
    {
        path: '*',
        component: Error404
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
// 动态标题
router.beforeEach((to, from, next) => { 
  document.title = to.matched[0].meta.title;
  next()
})
export default router
