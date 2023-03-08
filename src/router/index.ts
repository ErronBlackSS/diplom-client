import { createRouter, createWebHistory } from 'vue-router'
import { shouldRedirectToAuthorization } from './utils'
import AuthRouter from './auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/signin',
      beforeEnter: shouldRedirectToAuthorization
    },
    ...AuthRouter
  ]
})

export default router
