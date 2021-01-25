import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Layout from '../layout/index.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
      },
      {
        path: 'category',
        name: 'Category',
        component: () => import(/* webpackChunkName: "Category" */ '../views/Category.vue')
      },
      {
        path: 'timeline',
        name: 'TimeLine',
        component: () => import(/* webpackChunkName: "TimeLine" */ '../views/TimeLine.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import(/* webpackChunkName: "About" */ '../views/About.vue')
      },
      {
        path: 'info/:id',
        name: 'Info',
        component: () => import(/* webpackChunkName: "Info" */ '../views/Info.vue')
      }

    ]
  },
  {
    path: '/*',
    name: 'CommonNotfoundError',
    component: () => import(/* webpackChunkName: "CommonNotfoundError" */ '../views/Error-Page/404.vue'),
    meta: { title: '页面找不到' },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
