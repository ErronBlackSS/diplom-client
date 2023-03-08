export default [
  {
    path: '/signin',
    name: 'signin',
    meta: {
      layout: 'AuthLayout'
    },
    component: import('@/views/SigninView.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    meta: {
      layout: 'AuthLayout'
    },
    component: import('@/views/SignupView.vue')
  }
]
