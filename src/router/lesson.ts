import { shouldRedirectToMain } from './utils'

export default [
  {
    path: '/lesson/:courseId',
    name: 'lesson',
    component: () => import('@/views/LessonView.vue'),
    beforeEnter: shouldRedirectToMain,
    children: [
      {
        path: ':lessonId',
        name: 'pass-lesson',
        meta: {
          title: 'Обучение - урок'
        },
        component: () => import('@/modules/lesson/components/Passing/LessonStep.vue'),
        children: [
          {
            path: 'step/:stepId',
            name: 'step',
            meta: {
              title: 'Обучение - урок'
            },
            component: () => import('@/modules/lesson/components/Passing/StepContent.vue')
          }
        ]
      }
    ]
  }
]
