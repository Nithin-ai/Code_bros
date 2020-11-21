import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import veg from '../components/veg.vue'
import specific from '../components/specific.vue'
import login from '../components/login.vue'
import Register from '../components/Register.vue'
import Buyerinfo from '../components/Buyerinfo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },{
    path:'/veg',
    name:'VEG',
    component:veg
  },{
    path:'/spec',
    name:'specific',
    component:specific
  },{
    path:'/login',
    name:'Login',
    component:login
  },{
    path:'/register',
    name:'register',
    component:Register
  },{
    path:'/binfo',
    name:'buyerinfo',
    component:Buyerinfo
  }
]

const router = new VueRouter({
  routes
})

export default router
