export default [
  {
    path: '/edit-lesson/:moduleId',
    name: 'edit-lesson',
    component: () => import('@/views/EditLessonView.vue'),
    children: [
      {
        path: ':lessonId',
        name: 'lesson',
        component: () => import('@/modules/editLesson/components/EditLessonStep.vue')
      }
    ]
  }
]
