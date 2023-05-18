import axios from 'axios'
import { transformAndValidate } from 'class-transformer-validator'
import { Step, StepType } from '../types/lessons-with-steps'
import { StepResponse } from './models/lessons-with-steps.models'

export async function createStep(lessonId: number, type: StepType, content: string): Promise<Step> {
  try {
    const res = await axios.post<StepResponse>(`lessons/${lessonId}/steps`, {
      type,
      content
    })

    const result = await transformAndValidate(StepResponse, res.data)

    return result
  } catch (error) {
    return Promise.reject(error)
  }
}

export async function getLessonSteps(lessonId: number): Promise<Step[]> {
  try {
    const res = await axios.get<StepResponse[]>(`lessons/${lessonId}/steps`)

    const result = await transformAndValidate(StepResponse, res.data)

    return result
  } catch (error) {
    return Promise.reject(error)
  }
}
