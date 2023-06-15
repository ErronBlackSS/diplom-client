import { Course } from '@/modules/courses/types'

export type LearnCourse = Course & { stepsCount: number; passedStepsCount: number }
