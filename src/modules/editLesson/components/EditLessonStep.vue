<template>
  <MainLoader class="!h-screen" v-if="isLoading" />
  <ViewWrapper v-else>
    <StepBreadCrumb :steps="steps" />
  </ViewWrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapStores } from 'pinia'
import { useStepsStore } from '../store/steps'
import ViewWrapper from '@/components/ViewWrapper.vue'
import StepBreadCrumb from './StepsBreadcrumb/StepBreadCrumb.vue'
import MainLoader from '@/components/MainLoader.vue'
import { Step } from '../types/lessons-with-steps'

export default defineComponent({
  data: () => ({
    isLoading: true
  }),
  components: { ViewWrapper, StepBreadCrumb, MainLoader },
  computed: {
    ...mapStores(useStepsStore),
    lessonId() {
      return Number(this.$route.params.lessonId)
    },
    steps(): Step[] {
      return this.stepsStore.steps
    }
  },
  watch: {
    lessonId: {
      immediate: true,
      handler: async function (newLessonId) {
        await this.loadLessonSteps(newLessonId)
      }
    }
  },
  methods: {
    async loadLessonSteps(lessonId: number) {
      try {
        this.isLoading = true
        await this.stepsStore.getLessonSteps(lessonId)
      } finally {
        this.isLoading = false
      }
    }
  }
})
</script>

<style scoped></style>
