import { defineStore } from 'pinia'
import { User } from '../types'
import * as Api from '../api/.'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as User | null
  }),
  actions: {
    async getUserData() {
      const getUserData = await Api.getMe()
      const token = localStorage.getItem('access_token')
      document.cookie = `access-token=${token}`
      this.user = getUserData
    },
    clearUserData() {
      this.user = null
    }
  }
})
