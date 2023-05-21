import { shouldRedirectToMain } from './utils'

export default [
  {
    path: '/edit-lesson/:moduleId',
    name: 'edit-lesson',
    component: () => import('@/views/EditLessonView.vue'),
    beforeEnter: shouldRedirectToMain,
    children: [
      {
        path: ':lessonId',
        name: 'lesson',
        meta: {
          title: 'Редактирование - урок'
        },
        component: () => import('@/modules/editLesson/components/EditLessonStep.vue'),
        children: [
          {
            path: 'step/:stepId',
            name: 'step',
            meta: {
              title: 'Редактирование - урок'
            },
            component: () => import('@/modules/editLesson/components/StepContent.vue')
          }
        ]
      }
    ]
  }
]
