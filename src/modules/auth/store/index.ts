import { defineStore } from 'pinia'
import * as Api from '../api'

export const useAuthStore = defineStore('auth', {
  state: () => ({}),
  actions: {
    singup(email: string, password: string) {
      return Api.singup(email, password)
    },
    register(token: string) {
      return Api.register(token)
    }
  }
})
