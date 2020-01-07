import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Strategies from '../views/Strategies.vue'
import StrTurn1 from '../views/StrTurn1'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/strategies',
    name: 'strategies',
    component: Strategies
  },
  {
    path: '/turn1',
    name: 'turn1',
    component: StrTurn1
  }
]

const router = new VueRouter({
  routes
})

export default router
