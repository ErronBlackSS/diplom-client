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
      console.log(module, 'new module')
      this.modules.push(module)
    },
    async getCourseContent(courseId: number) {
      const courseContent = await Api.getCourseContent(courseId)
      console.log(courseContent, 'CONTENT')
      this.modules = courseContent.modules
    }
  }
})
