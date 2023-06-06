import { Lesson } from './lessons'

export type Module = {
  id: number
  name: string
  description: string
  order: number
  lessons: Lesson[]
}

export type CourseContent = {
  modules: Module[]
}

export type CourseChecklist = {
  enoughModules: number
  moduleNames: boolean
  enoughLessons: number
  enoughTests: number
  testEnoughAnswers: boolean
  testRightAnswers: boolean
  emptyModules: boolean
  enoughSteps: boolean
  stepsEmptyContent: boolean
}
