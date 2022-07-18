import { createRouter, createWebHistory } from "vue-router";
import Main from '../components/Main'
import Lids from '../views/Lids'
import Reg from '../components/Reg'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/reg',
    name: 'Reg',
    component: Reg
  },
  {
    path: '/leads',
    name: 'Leads',
    component: Lids
  },
  {
    path: '/admin',
    name: 'admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AdminPanel.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
