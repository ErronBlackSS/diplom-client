export default [
  {
    path: '/auth',
    meta: {
      layout: 'AuthLayout'
    },
    children: [
      {
        path: 'sign-in',
        name: 'sign-in',
        component: () => import('@/views/SigninView.vue')
      },
      {
        path: 'sign-up',
        name: 'sign-up',
        component: () => import('@/views/SignupView.vue')
      }
    ]
  }
]
