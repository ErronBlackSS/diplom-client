import { defineStore } from 'pinia'
import * as Api from '../api'
import { LearnCourse } from '../types'

export const useLearnStore = defineStore('learn', {
  state: () => ({
    userCourses: [] as LearnCourse[]
  }),
  actions: {
    async getUserCourses() {
      const userCourses = await Api.getUserCourses()
      this.userCourses = userCourses
    }
  }
})
