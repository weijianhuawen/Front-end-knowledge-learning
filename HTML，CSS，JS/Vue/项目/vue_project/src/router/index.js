import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/emp',
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
    path: '/emp',
    name: 'emp',
    component: () => import('../views/tlias/EmpView.vue')
  },
  {
    path: '/dep',
    name: 'dep',
    component: () => import('../views/tlias/DepartView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
