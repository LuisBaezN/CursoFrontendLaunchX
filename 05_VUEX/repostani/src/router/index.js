import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Pedido from '../views/Pedido.vue'
import Owner from '../views/Owner.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/ordenar',
    name: 'ordenar',
    component: Pedido
  },
  {
    path: '/owner',
    name: 'owner',
    component: Owner
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
