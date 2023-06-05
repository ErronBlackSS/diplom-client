<template>
  <MainLoader v-if="isLoading" />
  <div class="h-screen my-[10px] w-full" v-else>
    <ContentEditor v-model="stepTextContent" @save="saveStepContent" />
    <DeviderHorizonalLine />
    <EditStepTest
      class="py-[15px]"
      v-if="isTest && test"
      :test="test"
      @add-answer="addAnswer"
      @set-right-answer="setRightAnswer"
      @change-answer-order="changeOrder"
      @delete-answer="deleteAnswer"
      @change-answer-text="changeAnswerText"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapStores } from 'pinia'
import { useStepContentStore } from '../../store/step-content'
import MainLoader from '@/components/MainLoader.vue'
import ContentEditor from '@/components/ContentEditor/ContentEditor.vue'
import { saveNotify } from '@/helpers/notifications'
import DeviderHorizonalLine from '@/ui/DeviderHorizonalLine.vue'
import { StepType } from '../../types/steps'
import EditStepTest from './../Test/EditStepTest.vue'

export default defineComponent({
  components: { MainLoader, ContentEditor, DeviderHorizonalLine, EditStepTest },
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
    ...mapStores(useStepContentStore),
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
    async saveStepContent() {
      if (this.stepTextContent !== this.step.content) {
        await this.stepContentStore.updateStepContent(this.stepId, this.stepTextContent)
        saveNotify('Контент шага сохранен!')
      }
    },
    async addAnswer(testId: number, name: string) {
      await this.stepContentStore.createTestAnswer(this.stepId, testId, 0, name)
    },
    async setRightAnswer(answerId: number, option: boolean) {
      await this.stepContentStore.setRightAnswer(this.stepId, answerId, option)
    },
    async changeOrder(answerId: number, order: number) {
      await this.stepContentStore.changeAnswerOrder(this.stepId, answerId, order)
    },
    async deleteAnswer(answerId: number) {
      await this.stepContentStore.deleteAnswer(this.stepId, answerId)
    },
    async changeAnswerText(answerId: number, name: string) {
      await this.stepContentStore.changeAnswerText(this.stepId, answerId, name)
    }
  }
})
</script>

<style scoped></style>
