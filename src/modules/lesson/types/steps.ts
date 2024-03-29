export type Step = {
  id: number
  type: StepType
  usersPassed: number[]
}

export type StepContent = {
  stepId: number
  content: string
}

export type Test = {
  id: number
  stepId: number
  answers: TestAnswer[]
}

export type TestAnswer = {
  id: number
  order: number
  name: string
  isRight: boolean
  testId: number
}

export enum StepType {
  TEST = 'TEST',
  TEXT = 'TEXT'
}
