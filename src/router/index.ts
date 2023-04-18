import { createRouter, createWebHistory } from 'vue-router'
import AuthRouter from './auth'
import LearnRouter from './learn'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      meta: {
        layout: 'MainLayout',
        title: 'main'
      },
      path: '/',
      name: 'home',
      redirect: '/catalog',
      children: [
        {
          path: '/catalog',
          name: 'catalog',
          component: () => import('@/views/MainPage.vue')
        },
        ...LearnRouter
      ]
    },
    ...AuthRouter
  ]
})

export default router
