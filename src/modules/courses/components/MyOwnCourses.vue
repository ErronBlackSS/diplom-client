<template>
  <MainLoader v-if="isLoading" />
  <ViewWrapper v-else class="flex flex-col gap-[20px]">
    <ViewTitle title="Мои курсы" />
    <CreateCourse v-if="!userCourses.length" :show-create-first-course="emptyCourses" />
    <CoursesList :courses="userCourses" @delete="deleteCourse" />
  </ViewWrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapStores } from 'pinia'
import { useCoursesStore } from '@/modules/courses/store'
import ViewTitle from '@/components/ViewTitle.vue'
import CreateCourse from './CreateCourse.vue'
import CoursesList from './CoursesList.vue'
import MainLoader from '@/components/MainLoader.vue'
import ViewWrapper from '@/components/ViewWrapper.vue'

export default defineComponent({
  components: {
    ViewTitle,
    CreateCourse,
    CoursesList,
    MainLoader,
    ViewWrapper
  },
  data: () => ({
    isLoading: true
  }),
  computed: {
    ...mapStores(useCoursesStore),
    userCourses() {
      return this.coursesStore.userCourses
    },
    emptyCourses() {
      return this.userCourses.length === 0
    }
  },
  async mounted() {
    try {
      await this.coursesStore.getUserCourses()
    } finally {
      this.isLoading = false
    }
  },
  methods: {
    deleteCourse(id: number) {
      this.coursesStore.deleteCourse(id)
    }
  }
})
</script>

<style scoped></style>
