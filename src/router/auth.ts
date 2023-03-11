export default [
  {
    path: '/auth',
    meta: {
      layout: 'AuthLayout'
    },
    children: [
      {
        path: 'sign-in',
        name: 'signin',
        component: import('@/views/SigninView.vue')
      },
      {
        path: 'sign-up',
        name: 'signup',
        component: import('@/views/SignupView.vue')
      }
    ]
  }
]
