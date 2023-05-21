import axios from '@/plugins/axios'
import { transformAndValidate } from 'class-transformer-validator'
import { Step, StepType } from '../types/lessons-with-steps'
import { StepResponse } from './models/lessons-with-steps.models'
import { StepContentResponse } from './models/steps.models'

export async function createStep(lessonId: number, type: StepType, content: string): Promise<Step> {
  try {
    console.log('LETS GOOO')
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

export async function getStepContent(lessonId: number, stepId: number) {
  try {
    const res = await axios.get<StepContentResponse>(`lessons/${lessonId}/steps/${stepId}`)

    const result = await transformAndValidate(StepContentResponse, res.data)

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
