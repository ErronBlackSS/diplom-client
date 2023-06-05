import { defineStore } from 'pinia'
import * as Api from '../api/steps'
import { StepType, Step } from '../types/steps'

export const useStepsStore = defineStore('steps', {
  state: () => ({
    steps: [] as Step[]
  }),
  actions: {
    async getLessonSteps(lessonId: number) {
      const steps = await Api.getLessonSteps(lessonId)
      this.steps = steps
    },
    async createStep(lessonId: number, type: StepType, content: string): Promise<number> {
      const step = await Api.createStep(lessonId, type, content)
      this.steps.push(step)
      return step.id
    },
    pushPassedUser(stepId: number, userId: number) {
      const stepIndex = this.steps.findIndex((step) => step.id === stepId)
      if (stepIndex === -1) return

      this.steps[stepIndex].usersPassed.push(userId)
    }
  }
})
