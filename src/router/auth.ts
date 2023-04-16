export default [
  {
    path: '/auth',
    meta: {
      layout: 'AuthLayout'
    },
    children: [
      {
        path: '/confirm',
        name: 'confirm',
        meta: {
          title: 'Подтверждение'
        },
        component: () => import('@/views/ConfirmView.vue')
      }
    ]
  }
]
