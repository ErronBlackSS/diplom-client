import { defineStore } from 'pinia'
import * as Api from '../api/.'
import { CatalogCourse } from '../types'

export const useCatalogStore = defineStore('catalog', {
  state: () => ({
    catalog: [] as CatalogCourse[]
  }),
  getters: {},
  actions: {
    async getCatalog() {
      const catalog = await Api.getCatalog()
      this.catalog = catalog
    }
  }
})
