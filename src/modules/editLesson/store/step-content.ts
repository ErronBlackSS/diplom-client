import { defineStore } from 'pinia'
import * as Api from '../api/steps'
import { StepContent, StepType, Test } from '../types/lessons-with-steps'

export const useStepsStore = defineStore('stepContent', {
  state: () => ({
    step: {} as StepContent,
    type: undefined as StepType | undefined,
    test: null as Test | null
  }),
  actions: {
    async getStep(lessonId: number, stepId: number) {
      const { step, type, test } = await Api.getStepContent(lessonId, stepId)
      this.step = step
      this.type = type
      this.test = test
    }
  }
})
