import { Lesson } from '@/modules/courseContent/types/lessons'

export type Step = {
  id: number
  type: StepType
}

export type LessonWithSteps = Lesson & { steps: Step[] }
