import { ResponseValidateError } from '@/helpers/error_validation'
import axios from '@/plugins/axios'
import { transformAndValidate } from 'class-transformer-validator'
import { Step, StepType, TestAnswer } from '../types/lessons-with-steps'
import { StepResponse } from './models/lessons-with-steps.models'
import { AnswerResponse, StepContentResponse } from './models/steps.models'
import { convertToOrderRequest, convertFromOrderResponse } from '@/helpers/functions'

export async function createStep(lessonId: number, type: StepType, content: string): Promise<Step> {
  try {
    const res = await axios.post<StepResponse>(`lessons/${lessonId}/steps`, {
      type,
      content
    })

    const result = await transformAndValidate(StepResponse, res.data)

    return result
  } catch (error) {
    if (error instanceof Array && error.length) {
      throw new ResponseValidateError(new Error(error.toString()))
    }
    return Promise.reject(error)
  }
}

export async function getStepContent(lessonId: number, stepId: number) {
  try {
    const res = await axios.get<StepContentResponse>(`lessons/${lessonId}/steps/${stepId}`)

    const result = await transformAndValidate(StepContentResponse, res.data)

    if (result.test?.answers) {
      result.test.answers = result.test.answers.map((answer) => {
        return { ...answer, order: convertFromOrderResponse(answer.order) }
      })
    }

    return result
  } catch (error) {
    if (error instanceof Array && error.length) {
      throw new ResponseValidateError(new Error(error.toString()))
    }
    return Promise.reject(error)
  }
}

export async function updateStepContent(lessonId: number, stepId: number, content: string) {
  try {
    const res = await axios.patch(`lessons/${lessonId}/steps/${stepId}/content`, {
      content
    })

    return res.data
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
    if (error instanceof Array && error.length) {
      throw new ResponseValidateError(new Error(error.toString()))
    }
    return Promise.reject(error)
  }
}

export async function createTestAnswer(
  lessonId: number,
  stepId: number,
  testId: number,
  order: number,
  name: string
) {
  try {
    const res = await axios.post<AnswerResponse>(
      `lessons/${lessonId}/steps/${stepId}/test/answer`,
      {
        testId,
        name,
        order: convertToOrderRequest(order)
      }
    )
    const result = await transformAndValidate(AnswerResponse, res.data)

    return { ...result, order: convertFromOrderResponse(result.order) }
  } catch (error) {
    if (error instanceof Array && error.length) {
      throw new ResponseValidateError(new Error(error.toString()))
    }
    return Promise.reject(error)
  }
}

export async function changeAnswer(
  lessonId: number,
  stepId: number,
  answerId: number,
  data: Partial<TestAnswer>
) {
  try {
    if (data.order) {
      data.order = convertToOrderRequest(data.order)
    }
    const res = await axios.patch<AnswerResponse>(
      `lessons/${lessonId}/steps/${stepId}/test/answer/${answerId}`,
      data
    )
    const result = await transformAndValidate(AnswerResponse, res.data)

    return { ...result, order: convertFromOrderResponse(result.order) }
  } catch (error) {
    if (error instanceof Array && error.length) {
      throw new ResponseValidateError(new Error(error.toString()))
    }
    return Promise.reject(error)
  }
}
