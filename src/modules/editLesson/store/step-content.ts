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
    },
    async updateStepContent(lessonId: number, stepId: number, content: string) {
      await Api.updateStepContent(lessonId, stepId, content)
      this.step.content = content
    },
    async createTestAnswer(
      lessonId: number,
      stepId: number,
      testId: number,
      order: number,
      name: string
    ) {
      const answer = await Api.createTestAnswer(lessonId, stepId, testId, order, name)
      if (this.test) {
        this.test.answers.push(answer)
      }
    },
    async setRightAnswer(lessonId: number, stepId: number, answerId: number, isRight: boolean) {
      const updatedAnswer = await Api.changeAnswer(lessonId, stepId, answerId, { isRight })

      if (this.test) {
        const curAnswerId = this.test.answers.findIndex((ans) => ans.id === answerId)
        if (curAnswerId === -1) return

        this.test.answers[curAnswerId].isRight = updatedAnswer.isRight
      }
    },
    async changeAnswerOrder(lessonId: number, stepId: number, answerId: number, order: number) {
      const updatedAnswer = await Api.changeAnswer(lessonId, stepId, answerId, { order })

      if (this.test) {
        const curAnswerId = this.test.answers.findIndex((ans) => ans.id === answerId)
        if (curAnswerId === -1) return

        this.test.answers[curAnswerId].order = updatedAnswer.order
      }
    },
    async deleteAnswer(lessonId: number, stepId: number, answerId: number) {
      await Api.deleteAnswer(lessonId, stepId, answerId)

      if (this.test) {
        this.test.answers = this.test.answers.filter((answer) => answer.id !== answerId)
      }
    },
    async changeAnswerText(lessonId: number, stepId: number, answerId: number, name: string) {
      const updatedAnswer = await Api.changeAnswer(lessonId, stepId, answerId, { name })

      if (this.test) {
        const curAnswerId = this.test.answers.findIndex((ans) => ans.id === answerId)
        if (curAnswerId === -1) return

        this.test.answers[curAnswerId].name = updatedAnswer.name
      }
    }
  }
})
