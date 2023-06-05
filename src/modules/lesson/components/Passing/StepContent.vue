<template>
  <MainLoader v-if="isLoading" />
  <div class="h-content my-[10px] w-full" v-else>
    <ContentViewer :content="stepTextContent" />
    <DeviderHorizonalLine />
    <div v-if="wrongAnswer" class="text-main-red text-[16px]">
      Вы ответили неверно. Пожалуйста, еще раз внимательно ознакомьтесь с предыдущими шагами и
      пройдите тест повторно
    </div>
    <StepTest v-if="isTest && test" @complete="completeTest" :test="test" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapStores } from 'pinia'
import ContentViewer from '@/components/ContentEditor/ContentViewer.vue'
import MainLoader from '@/components/MainLoader.vue'
import { useStepContentStore } from '../../store/step-content'
import { StepType } from '../../types/steps'
import DeviderHorizonalLine from '@/ui/DeviderHorizonalLine.vue'
import StepTest from '../Test/StepTest.vue'
import { useStepsStore } from '../../store/steps'
import { useUserStore } from '@/modules/user/store'

export default defineComponent({
  components: { ContentViewer, MainLoader, DeviderHorizonalLine, StepTest },
  data: () => ({
    isLoading: true,
    stepTextContent: '',
    wrongAnswer: false
  }),
  watch: {
    stepId: {
      immediate: true,
      handler: async function (newStepId, oldStepId) {
        if (newStepId) {
          await this.loadStepContent(newStepId)
        }
        if (oldStepId) {
          const oldStep = this.allSteps.find((step) => step.id === oldStepId)
          if (
            oldStep &&
            this.user &&
            oldStep.type !== StepType.TEST &&
            !oldStep.usersPassed.includes(this.user.id)
          ) {
            const userId = await this.stepContentStore.completeStep(oldStepId)
            this.stepsStore.pushPassedUser(oldStepId, userId)
          }
        }
      }
    }
  },
  computed: {
    ...mapStores(useStepContentStore, useStepsStore, useUserStore),
    user() {
      return this.userStore.user
    },
    allSteps() {
      return this.stepsStore.steps
    },
    StepType() {
      return StepType
    },
    lessonId() {
      return Number(this.$route.params.lessonId)
    },
    stepId() {
      return Number(this.$route.params.stepId)
    },
    step() {
      return this.stepContentStore.step
    },
    isTest() {
      return StepType[this.type || 'TEXT'] === StepType.TEST
    },
    type() {
      return this.stepContentStore.type
    },
    test() {
      return this.stepContentStore.test
    }
  },
  methods: {
    async loadStepContent(stepId: number) {
      try {
        await this.stepContentStore.getStep(stepId)
      } finally {
        this.stepTextContent = this.step.content
        this.isLoading = false
      }
    },
    async completeTest(answers: number[]) {
      const completionResult = await this.stepContentStore.completeTest(this.stepId, answers)
      if (completionResult.status === 'success' && this.user) {
        this.wrongAnswer = false
        this.stepsStore.pushPassedUser(this.stepId, this.user.id)
      } else if (completionResult.status === 'failed') {
        this.wrongAnswer = true
      }
    }
  }
})
</script>

<style scoped></style>
