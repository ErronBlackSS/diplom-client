import { defineStore } from 'pinia'
import * as Api from '../api/.'
import { ModulesWithLessons } from '../types/modules-with-lessons'

export const useLessonStore = defineStore('lesson', {
  state: () => ({
    courseName: '' as string,
    modules: null as ModulesWithLessons[] | null
  }),
  actions: {
    async getEditLessonContent(courseId: number) {
      const { courseName, modules } = await Api.getLessonContent(courseId)
      this.courseName = courseName
      this.modules = modules
    }
  }
})
