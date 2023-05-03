import { createRouter, createWebHistory } from 'vue-router'
import AuthRouter from './auth'
import LearnRouter from './learn'
import TeachRouter from './teach'
import CourseContentRouter from './course-content'

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
        ...LearnRouter,
        ...TeachRouter,
        ...CourseContentRouter
      ]
    },
    ...AuthRouter
  ]
})

export default router
