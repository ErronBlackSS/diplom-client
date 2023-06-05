<template>
  <MainLoader class="!h-screen" v-if="isLoading" />
  <ViewWrapper v-else>
    <StepBreadCrumb :steps="steps" :show-create="false" :completed-steps="completedStepsIds" />
    <router-view></router-view>
    <StepsSwither @next="nextStep" @prev="prevStep" />
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
import StepsSwither from './StepsSwither.vue'
import { useUserStore } from '@/modules/user/store'

export default defineComponent({
  components: { MainLoader, ViewWrapper, StepBreadCrumb, StepsSwither },
  data: () => ({
    isLoading: true
  }),
  computed: {
    ...mapStores(useStepsStore, useUserStore),
    lessonId() {
      return Number(this.$route.params.lessonId)
    },
    steps(): Step[] {
      return this.stepsStore.steps
    },
    currentStepIndex(): number {
      return this.steps.findIndex((step) => step.id === this.stepId) || 0
    },
    stepId(): number {
      return Number(this.$route.params.stepId)
    },
    user() {
      return this.userStore.user
    },
    completedStepsIds() {
      return this.steps.reduce((acc: number[], step) => {
        if (this.user && step.usersPassed.includes(this.user.id)) {
          acc.push(step.id)
        }
        return acc
      }, [])
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
        this.gotoStep(this.stepId)
      }
    },
    nextStep() {
      if (!this.currentStepIndex || !this.canShiftRight) return
      const nextStep = this.steps[this.currentStepIndex + 1]
      this.gotoStep(nextStep.id)
    },
    prevStep() {
      if (!this.currentStepIndex || !this.canShiftLeft) return
      const nextStep = this.steps[this.currentStepIndex - 1]
      this.gotoStep(nextStep.id)
    },
    canShiftLeft() {
      return this.currentStepIndex > 0
    },
    canShiftRight() {
      return this.currentStepIndex < this.steps.length - 1
    },
    gotoStep(stepId: number) {
      if (stepId) {
        this.$router.push({ name: 'step', params: { stepId: stepId } })
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
