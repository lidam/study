import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/webworker/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/webworker/test.vue'),
    },
    {
      path: '/testPic',
      name: 'testPic',
      component: () => import('../views/webworker/testPic.vue')
    },
    {
      path: '/workbook',
      name: 'workbook',
      component: () => import('../views/webworker/workfile.vue')
    },
    {
      path: '/gsap',
      name: 'gsap',
      component: () => import('../views/gsap/index.vue')
    }
  ],
})

export default router
