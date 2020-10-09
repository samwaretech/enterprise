import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import dashboard from '../views/dashboard/main.vue'
import assets from '../views/dashboard/assets.vue'
import account from '../views/dashboard/account.vue'
import project from '../views/dashboard/project.vue'

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
  },
  {
    path: '/dashboard/assets',
    name: 'assets',
    component: assets
  },
  {
    path: '/dashboard/user',
    name: 'user',
    component: account
  },
  {
    path: '/dashboard/project',
    name: 'project',
    component: project
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
