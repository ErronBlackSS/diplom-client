<template>
  <MainLoader class="!h-screen" v-if="isLoading" />
  <ViewWrapper v-else>
    <StepBreadCrumb :steps="steps" @create-step="clickShowCreateStepModal" />
    <router-view></router-view>
  </ViewWrapper>
  <ModalBoxCreateStep
    v-if="showCreateStepModal"
    @create="createStep"
    @close="clickCloseCreateStepModal"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapStores } from 'pinia'
import { useStepsStore } from '../store/steps'
import ViewWrapper from '@/components/ViewWrapper.vue'
import StepBreadCrumb from './StepsBreadcrumb/StepBreadCrumb.vue'
import MainLoader from '@/components/MainLoader.vue'
import { Step, StepType } from '../types/steps'
import ModalBoxCreateStep from './ModalBoxes/ModalBoxCreateStep.vue'
import { TYPE_TEXT } from '../constants/step-type-text'

export default defineComponent({
  data: () => ({
    isLoading: true,
    showCreateStepModal: false
  }),
  components: { ViewWrapper, StepBreadCrumb, MainLoader, ModalBoxCreateStep },
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
    },
    clickCloseCreateStepModal() {
      this.showCreateStepModal = false
    },
    clickShowCreateStepModal() {
      this.showCreateStepModal = true
    },
    async createStep(type: StepType) {
      try {
        this.showCreateStepModal = false
        this.isLoading = true
        const newStepId = await this.stepsStore.createStep(this.lessonId, type, TYPE_TEXT[type])
        if (newStepId) {
          this.$router.push({ name: 'step', params: { stepId: newStepId } })
        }
      } finally {
        this.isLoading = false
      }
    }
  }
})
</script>

<style scoped></style>
