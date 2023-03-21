import { createRouter, createWebHistory } from 'vue-router'
import { shouldRedirectToAuthorization } from './utils'
import AuthRouter from './auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      beforeEnter: shouldRedirectToAuthorization,
      redirect: '/auth/sign-in'
    },
    ...AuthRouter
  ]
})

export default router
