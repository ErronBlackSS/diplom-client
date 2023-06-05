import { defineStore } from 'pinia'
import * as Api from '../api/steps'
import { StepContent, StepType, Test } from '../types/steps'

export const useStepContentStore = defineStore('stepContent', {
  state: () => ({
    step: {} as StepContent,
    type: undefined as StepType | undefined,
    test: null as Test | null
  }),
  actions: {
    async getStep(stepId: number) {
      const { step, type, test } = await Api.getStepContent(stepId)
      this.step = step
      this.type = type
      this.test = test
    },
    async updateStepContent(stepId: number, content: string) {
      await Api.updateStepContent(stepId, content)
      this.step.content = content
    },
    async createTestAnswer(stepId: number, testId: number, order: number, name: string) {
      const answer = await Api.createTestAnswer(stepId, testId, order, name)
      if (this.test) {
        this.test.answers.push(answer)
      }
    },
    async setRightAnswer(stepId: number, answerId: number, isRight: boolean) {
      const updatedAnswer = await Api.changeAnswer(stepId, answerId, { isRight })

      if (this.test) {
        const curAnswerId = this.test.answers.findIndex((ans) => ans.id === answerId)
        if (curAnswerId === -1) return

        this.test.answers[curAnswerId].isRight = updatedAnswer.isRight
      }
    },
    async changeAnswerOrder(stepId: number, answerId: number, order: number) {
      const updatedAnswer = await Api.changeAnswer(stepId, answerId, { order })

      if (this.test) {
        const curAnswerId = this.test.answers.findIndex((ans) => ans.id === answerId)
        if (curAnswerId === -1) return

        this.test.answers[curAnswerId].order = updatedAnswer.order
      }
    },
    async deleteAnswer(stepId: number, answerId: number) {
      await Api.deleteAnswer(stepId, answerId)

      if (this.test) {
        this.test.answers = this.test.answers.filter((answer) => answer.id !== answerId)
      }
    },
    async changeAnswerText(stepId: number, answerId: number, name: string) {
      const updatedAnswer = await Api.changeAnswer(stepId, answerId, { name })

      if (this.test) {
        const curAnswerId = this.test.answers.findIndex((ans) => ans.id === answerId)
        if (curAnswerId === -1) return

        this.test.answers[curAnswerId].name = updatedAnswer.name
      }
    },
    async completeStep(stepId: number) {
      return Api.completeStep(stepId)
    },
    async completeTest(stepId: number, answers: number[]) {
      const completeData = await Api.completeStepTest(stepId, answers)

      if (completeData.status === 'success') {
        await this.completeStep(stepId)
      }

      return completeData
    }
  }
})
