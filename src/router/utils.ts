// Тут будут различные middlewares, guards и другие вспомогательные функции для построение роутинга

function isAuthentificated() {
  return false
}

// Функция будет проверять авторизрван пользователь или нет, в случае успеха
// Редирект на основную страницу приложения, иначе на экран авторизации
export const shouldRedirectToAuthorization = (to, from, next) => {
  if (isAuthentificated()) {
    next('/main')
  } else {
    next('/auth/signin')
  }
}
