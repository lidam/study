import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/index.vue'),
    },
    {
      path: '/webworker',
      name: 'webworker',
      component: () => import('../views/webworker/index.vue'),
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
