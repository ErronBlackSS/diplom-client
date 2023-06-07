import { shouldRedirectToMain } from './utils'

export default [
  {
    path: 'course/:courseId',
    name: 'create-course-detail',
    component: () => import('@/views/CourseContentView.vue'),
    redirect: () => {
      return { name: 'course' }
    },
    beforeEnter: shouldRedirectToMain,
    children: [
      {
        path: 'overview',
        name: 'course-overview',
        component: () => import('@/modules/courseContent/components/CourseContentOverview.vue')
      },
      {
        path: 'edit',
        name: 'course-edit',
        component: () => import('@/modules/courseContent/components/CourseContentEdit.vue')
      },
      {
        path: 'settings',
        name: 'course-settings',
        component: () => import('@/modules/courseContent/components/CourseSettings.vue')
      },
      {
        path: 'publication',
        name: 'course-publication',
        component: () => import('@/modules/courseContent/components/CoursePublication.vue')
      },
      {
        path: 'students',
        name: 'course-students',
        component: () => import('@/modules/courseContent/components/CourseStudents.vue')
      }
    ]
  }
]
