import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ViewKomment from '../views/ViewKomment.vue'
import ViewInvest from '../views/ViewInvest.vue'
import ViewPort from '../views/ViewPort.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/komment',
    name: 'Komment',
    component: ViewKomment
  },
  {
    path: '/invest',
    name: 'Invest',
    component: ViewInvest
  },
  {
    path: '/port',
    name: 'Portocred',
    component: ViewPort
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
