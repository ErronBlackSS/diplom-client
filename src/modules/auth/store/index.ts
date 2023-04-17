import { useUserStore } from '@/modules/user/store'
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
    },
    async signOut() {
      const userStore = useUserStore()
      await Api.signOut(userStore.user?.id)
      userStore.clearUserData()
    },
    async login(email: string, password: string) {
      await Api.singin(email, password)
    }
  }
})
