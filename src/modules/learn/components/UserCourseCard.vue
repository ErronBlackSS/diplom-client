<template>
  <div
    class="flex flex-row justify-between border hover:border-main-blue p-[20px] rounded-[6px] cursor-pointer"
    @click="gotoCourseContent"
  >
    <div>{{ courseName }}</div>
    <div>
      Пройдено <span class="text-green-500">{{ course.passedStepsCount }}</span> из
      <span class="text-green-500">{{ course.stepsCount }}</span> шагов
    </div>
    <ProgressCircle :percentage="stepsProgress" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { LearnCourse } from '../types'
import ProgressCircle from '@/components/ProgressCircle.vue'

export default defineComponent({
  components: {
    ProgressCircle
  },
  props: {
    course: {
      type: Object as PropType<LearnCourse>,
      required: true
    }
  },
  emits: [],
  computed: {
    stepsProgress() {
      if (this.course.passedStepsCount === 0) return 0
      return (this.course.passedStepsCount / this.course.stepsCount) * 100
    },
    courseName() {
      return this.course.name
    },
    courseId() {
      return this.course.id
    }
  },
  methods: {
    gotoCourseContent() {
      this.$router.push({
        path: `/lesson/${this.courseId}`
      })
    }
  }
})
</script>

<style scoped></style>
