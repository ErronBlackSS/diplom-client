import { defineStore } from 'pinia'
import { Module } from '../types'
import * as Api from '../api/.'

export const useCourseContentStore = defineStore('courseContent', {
  state: () => ({
    modules: [] as Module[]
  }),
  actions: {
    async createModule(courseId: number, name: string, order: number) {
      const module = await Api.createModule(courseId, { name: name, order: order })
      this.modules.push(module)
    },
    async getCourseContent(courseId: number) {
      const courseContent = await Api.getCourseContent(courseId)
      this.modules = courseContent.modules
    },
    async createLesson(moduleId: number, name: string, order: number) {
      const lesson = await Api.createLesson(moduleId, { name, order })
      const module = this.modules.find((mod) => mod.id === moduleId)

      if (module) module.lessons.push(lesson)
    }
  }
})
