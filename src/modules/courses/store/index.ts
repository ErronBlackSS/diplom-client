import { defineStore } from 'pinia'
import * as Api from '../api'
import { Course } from '../types/.'

export const useCoursesStore = defineStore('courses', {
  state: () => ({
    userCourses: [] as Course[]
  }),
  getters: {
    userCoursesMap(state): Record<number, Course | undefined> {
      if (!state.userCourses) return {}
      return state.userCourses.reduce<{
        [key: number]: Course | undefined
      }>((acc, course) => {
        acc[course.id] = course
        return acc
      }, {})
    }
  },
  actions: {
    async getUserCourses() {
      const userCourses = await Api.getUserCourses()
      this.userCourses = userCourses
    },
    async createCourse(name: string) {
      const newCourse = await Api.createCourse(name)
      this.addCourse(newCourse)
    },
    async deleteCourse(courseId: number) {
      await Api.deleteCourse(courseId)
      this.userCourses = this.userCourses.filter((course) => course.id !== courseId)
    },
    async publishCourse(courseId: number) {
      await Api.updateCourse(courseId, { published: true })
    },
    async renameCourse(courseId: number, name: string) {
      await Api.updateCourse(courseId, { name })
      const course = this.userCourses.find((course) => course.id === courseId)

      if (!course) return
      course.name = name
    },
    addCourse(course: Course) {
      this.userCourses.push(course)
    }
  }
})
