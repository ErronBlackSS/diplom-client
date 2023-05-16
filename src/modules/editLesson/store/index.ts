import { defineStore } from 'pinia'
import * as Api from '../api/.'
import { LessonWithSteps } from '../types/lessons-with-steps'

export const useEditLessonStore = defineStore('editLesson', {
  state: () => ({
    moduleName: '' as string,
    moduleId: null as number | null,
    lessons: null as LessonWithSteps[] | null
  }),
  actions: {
    async getEditLessonContent(_moduleId: number) {
      const { moduleId, moduleName, lessons } = await Api.getEditLessonContent(_moduleId)
      this.moduleName = moduleName
      this.moduleId = moduleId
      this.lessons = lessons
    }
  }
})
