export default [
  {
    path: 'course/:courseId',
    name: 'create-course-detail',
    component: () => import('@/views/CourseEditView.vue'),
    redirect: () => {
      return { name: 'course' }
    },
    children: [
      {
        path: 'overview',
        name: 'course-overview',
        component: import('@/modules/courseEdit/components/EditCourseOverview.vue')
      },
      {
        path: 'edit',
        name: 'course-edit',
        component: import('@/modules/courseEdit/components/EditCourseModules.vue')
      }
    ]
  }
]
