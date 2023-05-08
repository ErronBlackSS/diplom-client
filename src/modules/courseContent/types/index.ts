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
