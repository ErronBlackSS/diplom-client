import { Lesson } from '@/modules/courseContent/types/lessons'

export type Step = {
  id: number
  type: StepType
}

export type StepContent = {
  stepId: number
  content: string
}

export type Test = {
  id: number
  stepId: number
  answers: TestAnswer
}

export type TestAnswer = {
  id: number
  name: string
  isRight: boolean
  testId: number
}

export enum StepType {
  TEST = 'TEST',
  TEXT = 'TEXT'
}

export type LessonWithSteps = Lesson & { steps: Step[] }
