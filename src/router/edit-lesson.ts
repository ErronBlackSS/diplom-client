export default [
  {
    path: 'edit-lesson/:lessonId',
    name: 'edit-lesson',
    component: () => import('@/views/EditLessonView.vue'),
    redirect: () => {
      return { name: 'course' }
    },
    children: [
      {
        path: 'step',
        name: 'step',
        component: () => import('@/modules/courseContent/components/CourseContentOverview.vue')
      }
    ]
  }
]
