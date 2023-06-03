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
        name: 'edit-lesson-bread',
        meta: {
          title: 'Редактирование - урок'
        },
        component: () => import('@/modules/lesson/components/Editing/EditLessonStep.vue'),
        children: [
          {
            path: 'step/:stepId',
            name: 'edit-step',
            meta: {
              title: 'Редактирование - урок'
            },
            component: () => import('@/modules/lesson/components/Editing/EditStepContent.vue')
          }
        ]
      }
    ]
  }
]
