import { createRouter, createWebHistory } from 'vue-router'
import AuthRouter from './auth'
import LearnRouter from './learn'
import TeachRouter from './teach'
import CourseContentRouter from './course-content'
import EditLessonRouter from './edit-lesson'
import LessonRouter from './lesson'

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
          meta: {
            title: 'Каталог'
          },
          component: () => import('@/views/СatalogView.vue')
        },
        {
          path: '/profile',
          name: 'profile',
          meta: {
            title: 'Профиль'
          },
          component: () => import('@/views/ProfileView.vue')
        },
        {
          path: '/catalog/:courseId/promo',
          name: 'cource-promo',
          meta: {
            title: 'Каталог - Промо'
          },
          component: () => import('@/views/CoursePromoView.vue')
        },
        ...LearnRouter,
        ...TeachRouter,
        ...CourseContentRouter,
        ...LessonRouter,
        ...EditLessonRouter
      ]
    },
    ...AuthRouter
  ]
})

export default router
