import Vue from 'vue'
import VueRouter from 'vue-router'


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
    component: () => import('@/views/dashboard/account.vue'),
    beforeEnter: isAuth
  },
  {
    path: '/dashboard/assets',
    name: 'assets',
    component: () => import('@/views/dashboard/assets.vue'),
    beforeEnter: isAuth
  },
  {
    path: '/dashboard/project',
    name: 'project',
    component: () => import('@/views/dashboard/project.vue'),
    beforeEnter: isAuth
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
