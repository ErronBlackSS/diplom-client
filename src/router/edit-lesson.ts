import { shouldRedirectToMain } from './utils'

export default [
  {
    path: '/edit-lesson/:courseId',
    name: 'edit-lesson',
    component: () => import('@/views/LessonView.vue'),
    beforeEnter: shouldRedirectToMain,
    children: [
      {
        path: ':lessonId',
        name: 'lesson',
        meta: {
          title: 'Редактирование - урок'
        },
        component: () => import('@/modules/lesson/components/EditLessonStep.vue'),
        children: [
          {
            path: 'step/:stepId',
            name: 'step',
            meta: {
              title: 'Редактирование - урок'
            },
            component: () => import('@/modules/lesson/components/StepContent.vue')
          }
        ]
      }
    ]
  }
]
