import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    params: true,
    props: true,
  },
  {
    path: '/about',
    name: 'about',
    params: true,
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/types',
    name: 'types',
    params: true,
    props: true,
    component: () => import(/* webpackChunkName: "types" */ '../views/Types.vue')
  },
  {
    path: '/brands',
    name: 'brands',
    params: true,
    props: true,
    component: () => import(/* webpackChunkName: "brands" */ '../views/Brands.vue')
  },
  {
    path: '/scores',
    name: 'scores',
    params: true,
    props: true,
    component: () => import(/* webpackChunkName: "scores" */ '../views/Scores.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
