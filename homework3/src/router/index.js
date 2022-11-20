import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormView from '../views/FormView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signup',
    name: 'signup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.../views/FormView.vue
    component: () => import(/* webpackChunkName: "signup" */ '../views/FormView.vue')
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
