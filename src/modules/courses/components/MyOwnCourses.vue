<template>
  <div class="flex flex-col gap-[20px]">
    <ViewTitle title="Мои курсы" />
    <CreateCourse v-if="!courses.length" :show-create-first-course="true" />
    <div v-else>asdasdasd</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapStores } from 'pinia'
import { useCoursesStore } from '@/modules/courses/store'
import ViewTitle from '@/components/ViewTitle.vue'
import CreateCourse from './CreateCourse.vue'

export default defineComponent({
  components: { ViewTitle, CreateCourse },
  computed: {
    ...mapStores(useCoursesStore),
    courses() {
      return this.coursesStore.userCourses
    }
  },
  mounted() {
    this.coursesStore.getUserCourses()
  }
})
</script>

<style scoped></style>
