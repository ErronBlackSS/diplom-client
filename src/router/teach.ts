export default [
  {
    path: '/teach',
    name: 'teach',
    component: () => import('@/views/TeachView.vue'),
    redirect: () => {
      return { name: 'teach-courses' }
    },
    children: [
      {
        path: 'courses',
        name: 'teach-courses',
        component: () => import('@/modules/courses/components/MyOwnCourses.vue')
      },
      {
        path: 'courses/create',
        name: 'create-course',
        component: () => import('@/modules/courses/components/CreateCourse.vue')
      }
    ]
  }
]
