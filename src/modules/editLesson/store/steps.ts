import { defineStore } from 'pinia'
import * as Api from '../api/steps'
import { StepType, Step } from '../types/lessons-with-steps'

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
    }
  }
})
