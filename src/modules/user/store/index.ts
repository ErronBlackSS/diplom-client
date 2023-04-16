import { defineStore } from 'pinia'
import { User } from '../types'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as User | null
  }),
  actions: {}
})
