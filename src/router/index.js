import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import dashboard from '../views/dashboard/main.vue'

Vue.use(VueRouter)

const isAuth = (to, from, next)=> {
  let token = localStorage.getItem('token')
  token ? next() : next('/')
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard,
    beforeEnter: isAuth
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
