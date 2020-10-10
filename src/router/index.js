import Vue from 'vue'
import VueRouter from 'vue-router'
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
    component: () => import('@/views/Home.vue')
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
    component: () => import('@/views/dashboard/assets.vue')
  },
  {
    path: '/dashboard/user',
    name: 'user',
    component: () => import('@/views/dashboard/account.vue')
  },
  {
    path: '/dashboard/project',
    name: 'project',
    component: () => import('@/views/dashboard/project.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
