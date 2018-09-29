import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/support',
      name: 'support',
      // route level code-splitting
      // this generates a separate chunk (support.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "support" */ './views/Support.vue')
    },
    {
      path: '/design',
      name: 'design',
      // route level code-splitting
      // this generates a separate chunk (design.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "design" */ './views/Design.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (contact.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "contact" */ './views/Contact.vue')
    },
    {
      path: '*',
      component: () => import(/* webpackChunkName: "pagenotfound" */ './views/PageNotFound.vue')
    }
  ]
})
