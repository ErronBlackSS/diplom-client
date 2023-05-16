import { defineStore } from 'pinia'
import { Module } from '../types'
import * as Api from '../api/.'
import { Lesson } from '../types/lessons'

export const useCourseContentStore = defineStore('courseContent', {
  state: () => ({
    modules: [] as Module[]
  }),
  getters: {
    modulesMap(state) {
      if (!state.modules) return
      return state.modules.reduce<Record<number, Module | undefined>>((acc, module) => {
        acc[module.id] = module
        return acc
      }, {})
    },
    lessonsMap(state) {
      if (!state.modules) return
      return state.modules.reduce<Record<number, Lesson | undefined>>((acc, module) => {
        module.lessons.forEach((lesson) => {
          acc[lesson.id] = lesson
        })
        return acc
      }, {})
    }
  },
  actions: {
    async createModule(courseId: number, name: string, order: number) {
      const module = await Api.createModule({ name, courseId, order })
      this.modules.push(module)
    },
    async getCourseContent(courseId: number) {
      const courseContent = await Api.getCourseContent(courseId)
      this.modules = courseContent.modules
    },
    async createLesson(moduleId: number, name: string, order: number) {
      const lesson = await Api.createLesson({ name, moduleId, order })
      const module = this.modules.find((mod) => mod.id === moduleId)

      if (module) module.lessons.push(lesson)
    },
    async changeLessonOrder(moduleId: number, lessonId: number, newOrder: number) {
      await Api.changeLessonOrder(lessonId, newOrder)

      const curModuleId = this.modules.findIndex((mod) => mod.id === moduleId)
      if (curModuleId === -1) return

      const curLessonId = this.modules[curModuleId].lessons.findIndex((les) => les.id === lessonId)
      if (curLessonId === -1) return

      this.modules[curModuleId].lessons[curLessonId].order = newOrder
    },
    async changeModuleName(moduleId: number, name: string) {
      await Api.updateModule(moduleId, { name })
      const curModuleId = this.modules.findIndex((mod) => mod.id === moduleId)
      if (curModuleId === -1) return

      this.modules[curModuleId].name = name
    },
    async changeModuleDescription(moduleId: number, newDescription: string) {
      await Api.updateModule(moduleId, { description: newDescription })
      const curModuleId = this.modules.findIndex((mod) => mod.id === moduleId)
      if (curModuleId === -1) return

      this.modules[curModuleId].description = newDescription
    }
  }
})