<template>
  <div class="h-full flex flex-col">
    <CatalogSearch />
    <div class="grid grid-cols-3 gap-[20px] py-[40px]">
      <CatalogItem v-for="(course, index) in catalogCourses" :key="index" :course="course" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { CatalogCourse } from '../types/.'
import CatalogSearch from './CatalogSearch.vue'
import CatalogItem from './CatalogItem.vue'

export default defineComponent({
  components: { CatalogSearch, CatalogItem },
  props: {
    catalogCourses: {
      type: Array as PropType<CatalogCourse[]>,
      required: true
    }
  }
})
</script>

<style scoped></style>
