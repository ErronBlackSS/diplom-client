<template>
  <MainLoader class="!h-screen" v-if="isLoading" />
  <ViewWrapper v-else>
    <StepBreadCrumb :steps="steps" />
    <router-view></router-view>
  </ViewWrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapStores } from 'pinia'
import MainLoader from '@/components/MainLoader.vue'
import ViewWrapper from '@/components/ViewWrapper.vue'
import StepBreadCrumb from './../StepsBreadcrumb/StepBreadCrumb.vue'
import { useStepsStore } from '../../store/steps'
import { Step } from '../../types/steps'

export default defineComponent({
  components: { MainLoader, ViewWrapper, StepBreadCrumb },
  data: () => ({
    isLoading: true
  }),
  computed: {
    ...mapStores(useStepsStore),
    lessonId() {
      return Number(this.$route.params.lessonId)
    },
    steps(): Step[] {
      return this.stepsStore.steps
    },
    stepId(): number | undefined {
      return Number(this.$route.params.stepId)
    }
  },
  watch: {
    lessonId: {
      immediate: true,
      handler: async function (newLessonId) {
        if (newLessonId) {
          await this.loadLessonSteps(newLessonId)
        }
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
        this.gotoStep()
      }
    },
    gotoStep() {
      if (this.stepId) {
        this.$router.push({ name: 'step', params: { stepId: this.stepId } })
      } else {
        const firstStep = this.steps.at(0) || undefined
        if (firstStep) {
          this.$router.push({ name: 'step', params: { stepId: firstStep.id } })
        }
      }
    }
  }
})
</script>

<style scoped></style>
