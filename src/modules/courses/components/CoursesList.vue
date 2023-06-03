<template>
  <div class="flex flex-col w-[50vw] gap-[10px]">
    <div v-for="{ name, id } in courses" :key="id">
      <CourseCard @delete="deleteCourse" @rename="renameCourse" :name="name" :id="id" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Course } from '../types'
import CourseCard from './CourseCard.vue'

export default defineComponent({
  components: { CourseCard },
  props: {
    courses: {
      type: Array as PropType<Course[]>,
      default: () => []
    }
  },
  emits: ['delete', 'rename'],
  methods: {
    deleteCourse(id: number) {
      this.$emit('delete', id)
    },
    renameCourse(id: number, name: string) {
      this.$emit('rename', id, name)
    }
  }
})
</script>

<style scoped></style>
