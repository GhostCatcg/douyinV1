// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

// 一级路由
import Home from './routerComponents/HomePage'
import List from './routerComponents/ListPage'
import Login from './routerComponents/LoginPage'
// import Register from './routerComponents/RegisterPage'
import Vip from './routerComponents/Vip'
import Mv from './routerComponents/MvPage'
import Singer from './routerComponents/SingerPage'
import SongList from './routerComponents/SongListPage'
import Music from './routerComponents/Music'
import Company from './routerComponents/Company'

// 使用swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'



Vue.use(VueAwesomeSwiper)



Vue.config.productionTip = false

Vue.use(VueRouter)




const routes = [
  // 设置路由路径
  {path:'/',name:'homeLink',component:Home},
  {path:'/list',name:'listLink',component:List},
  {path:"/login",name:"loginLink",component:Login},
  // {path:"/register",name:"registerLink",component:Register},
  {path:"/mv",name:"mvLink",component:Mv},
  {path:'/singer',name:"singerLink",component:Singer},
  {path:"/songlist",name:"songlistLink",component:SongList},
  {path:'/vip',name:"vipLink",component:Vip},
  {path:"/company",name:"companyLink",component:Company},
  {path:"/music",name:'musicLink',component:Music},

  {path:'*',redirect:'/'},
]


const router = new VueRouter({
  routes,
  mode:'hash'
})


new Vue({
  el: '#app',
  router,
  render: (h) => h(App),
   // components: { App },
  // template: '<App/>',
})
