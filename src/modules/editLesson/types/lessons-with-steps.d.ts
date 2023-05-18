import { Lesson } from '@/modules/courseContent/types/lessons'

export type Step = {
  id: number
  type: StepType
  content: string
  test: Test | undefined
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

export type StepType = 'TEXT' | 'TEST'

export type LessonWithSteps = Lesson & { steps: Step[] }
