import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    //Use last saved scroll position if route has been visited before
    if (savedPosition) {
      return savedPosition
    }
    //Jump to hash if there is hash in url
    if (to.hash) {
      return { selector: to.hash }
    }
    //By default, render view at top of the page if never-been-visited route 
    return { x: 0, y: 0 }
  }
})

export default router
