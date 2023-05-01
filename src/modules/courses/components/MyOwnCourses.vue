<template>
  <div class="flex flex-col gap-[20px]">
    <ViewTitle title="Мои курсы" />
    <CreateCourse v-if="!userCourses.length" :show-create-first-course="true" />
    <CoursesList :courses="userCourses" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapStores } from 'pinia'
import { useCoursesStore } from '@/modules/courses/store'
import ViewTitle from '@/components/ViewTitle.vue'
import CreateCourse from './CreateCourse.vue'
import CoursesList from './CoursesList.vue'

export default defineComponent({
  components: { ViewTitle, CreateCourse, CoursesList },
  computed: {
    ...mapStores(useCoursesStore),
    userCourses() {
      return this.coursesStore.userCourses
    }
  },
  mounted() {
    this.coursesStore.getUserCourses()
  }
})
</script>

<style scoped></style>
