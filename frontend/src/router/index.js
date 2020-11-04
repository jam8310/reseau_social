import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import('../views/Create')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
