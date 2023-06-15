import { Course } from '@/modules/courses/types'
import { defineStore } from 'pinia'
import * as Api from '../api/.'
import { CatalogCourse } from '../types'

export const useCatalogStore = defineStore('catalog', {
  state: () => ({
    catalog: [] as CatalogCourse[],
    coursePromo: {} as Course
  }),
  getters: {},
  actions: {
    async getCatalog() {
      const catalog = await Api.getCatalog()
      this.catalog = catalog
    },
    async getCoursePromo(courseId: number) {
      const promo = await Api.getCoursePromo(courseId)
      this.coursePromo = promo
    },
    async bookOnCourse(courseId: number) {
      await Api.bookOnCourse(courseId)
    }
  }
})
