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
    addCourse(course: Course) {
      this.userCourses.push(course)
    }
  }
})