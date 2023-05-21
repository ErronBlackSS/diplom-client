<template>
  <MainLoader v-if="isLoading" />
  <ViewWrapper class="!my-[30px] !py-[0px] w-full" v-else>
    <ContentEditor v-model="stepTextContent" @save="saveStepContent" />
    <DeviderHorizonalLine />
    <StepTest
      class="py-[15px]"
      v-if="isTest && test"
      :test="test"
      @add-answer="addAnswer"
      @set-right-answer="setRightAnswer"
      @change-answer-order="changeOrder"
      @delete-answer="deleteAnswer"
      @change-answer-text="changeAnswerText"
    />
  </ViewWrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapStores } from 'pinia'
import { useStepsStore } from '../store/step-content'
import MainLoader from '@/components/MainLoader.vue'
import ContentEditor from '@/components/ContentEditor/ContentEditor.vue'
import { saveNotify } from '@/helpers/notifications'
import ViewWrapper from '@/components/ViewWrapper.vue'
import DeviderHorizonalLine from '@/ui/DeviderHorizonalLine.vue'
import { StepType } from '../types/lessons-with-steps'
import StepTest from './Test/StepTest.vue'

export default defineComponent({
  components: { MainLoader, ContentEditor, ViewWrapper, DeviderHorizonalLine, StepTest },
  data: () => ({
    isLoading: true,
    stepTextContent: ''
  }),
  watch: {
    stepId: {
      immediate: true,
      handler: async function (newStepId) {
        if (newStepId) {
          await this.loadStepContent(newStepId)
        }
      }
    }
  },
  computed: {
    ...mapStores(useStepsStore),
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
        await this.stepContentStore.getStep(this.lessonId, stepId)
      } finally {
        this.stepTextContent = this.step.content
        this.isLoading = false
      }
    },
    async saveStepContent() {
      if (this.stepTextContent !== this.step.content) {
        await this.stepContentStore.updateStepContent(
          this.lessonId,
          this.stepId,
          this.stepTextContent
        )
        saveNotify('Контент шага сохранен!')
      }
    },
    async addAnswer(testId: number, name: string) {
      await this.stepContentStore.createTestAnswer(this.lessonId, this.stepId, testId, 0, name)
    },
    async setRightAnswer(answerId: number, option: boolean) {
      await this.stepContentStore.setRightAnswer(this.lessonId, this.stepId, answerId, option)
    },
    async changeOrder(answerId: number, order: number) {
      await this.stepContentStore.changeAnswerOrder(this.lessonId, this.stepId, answerId, order)
    },
    async deleteAnswer(answerId: number) {
      await this.stepContentStore.deleteAnswer(this.lessonId, this.stepId, answerId)
    },
    async changeAnswerText(answerId: number, name: string) {
      await this.stepContentStore.changeAnswerText(this.lessonId, this.stepId, answerId, name)
    }
  }
})
</script>

<style scoped></style>
