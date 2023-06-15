import { shouldRedirectToMain } from './utils'

export default [
  {
    path: '/learn',
    name: 'learn',
    component: () => import('@/views/LearnView.vue'),
    redirect: () => {
      return { name: 'learn-courses' }
    },
    beforeEnter: shouldRedirectToMain,
    children: [
      {
        path: 'courses',
        name: 'learn-courses',
        component: () => import('@/modules/learn/components/UserCourses.vue')
      }
    ]
  }
]
