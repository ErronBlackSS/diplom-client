import { isAuthenticated } from '@/modules/auth/utils/auth.helpers'

export const shouldRedirectToMain = (to, from, next) => {
  if (isAuthenticated()) {
    next()
  } else {
    next('/catalog')
  }
}

// Функция будет проверять авторизрван пользователь или нет, в случае успеха
// Редирект на основную страницу приложения, иначе на экран авторизации
export const shouldRedirectToAuthorization = (to, from, next) => {
  if (isAuthenticated()) {
    next('/')
  } else {
    next('/auth/signin')
  }
}
