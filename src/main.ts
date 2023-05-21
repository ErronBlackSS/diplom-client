import { createApp, h } from 'vue'
import { createPinia } from 'pinia'
import 'element-plus/dist/index.css'
import '@/assets/css/index.css'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import 'reflect-metadata'
import App from './App.vue'
import router from './router'
import ElementPlus, { ElNotification } from 'element-plus'
import elementPlusRuLocale from 'element-plus/dist/locale/ru'
import ExamPointIcon from './components/Icons/ExamPointIcon.vue'

const app = createApp(App)

router.beforeEach((to, from, next) => {
  const title = to.meta?.title as string

  const titleFromParam = to.params?.pageTitle
  if (title) {
    document.title = title
  }

  if (titleFromParam) {
    document.title = `${titleFromParam} - ${title}`
  }

  next()
})

window.addEventListener('unhandledrejection', (event) => {
  if (event.reason.isAxiosError) {
    const errorMessage =
      event.reason.response?.data.message ||
      event.reason.response?.data.error ||
      event.reason.message ||
      event.reason.code
    const method = event.reason.config?.method || ''
    const url = event.reason.config?.url || ''
    const requestUrl = `${method ? method.toUpperCase() + ' -> ' : ''}${url}`
    const status = event.reason.response
      ? `${event.reason.response.status} ${event.reason.response.statusText}`
      : undefined

    const text1 = h('span', { style: 'color: teal;' }, requestUrl)
    const text2 = status ? h('span', { style: 'color: red;' }, '\n' + status) : undefined
    const text3 = '\n' + errorMessage

    if (!errorMessage.includes('Unauthorized')) {
      ElNotification({
        title: 'Ошибка в запросе',
        message: h(
          'p',
          {
            style: 'text-align: left; white-space: pre-line; line-height: 21px;'
          },
          [text1, text2, text3]
        ),
        showClose: true,
        icon: ExamPointIcon,
        duration: 0
      })
    }
  } else {
    ElNotification({
      title: 'Необработанное исключение',
      message: h(
        'p',
        {
          style: 'text-align: left; white-space: pre-line; line-height: 21px;'
        },
        [event.reason.message]
      ),
      showClose: true,
      icon: ExamPointIcon,
      duration: 0
    })
  }
})

app.use(createPinia())
app.use(router)
app.use(ElementPlus, {
  locale: elementPlusRuLocale
})
app.mount('#app')
