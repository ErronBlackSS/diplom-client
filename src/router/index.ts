import { createRouter, createWebHistory } from 'vue-router'
import AuthRouter from './auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      meta: {
        layout: 'MainLayout',
        title: 'Главная'
      },
      path: '/',
      name: 'home',
      redirect: '/catalog',
      children: [
        {
          path: '/catalog',
          name: 'Каталог',
          component: () => import('@/views/MainPage.vue')
        }
      ]
    },
    ...AuthRouter
  ]
})

export default router
