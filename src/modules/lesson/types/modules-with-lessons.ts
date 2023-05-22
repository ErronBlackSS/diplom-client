import { Lesson } from '@/modules/courseContent/types/lessons'

export type ExposedModule = {
  id: number
  name: string
}

export type ModulesWithLessons = ExposedModule & {
  lessons: Lesson[]
}
