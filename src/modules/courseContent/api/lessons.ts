import { ResponseValidateError } from '@/helpers/error_validation'
import axios from 'axios'
import { transformAndValidate } from 'class-transformer-validator'
import { CreateLessonDto, LessonResponse } from './models/lessons.models'

export async function createLesson(moduleId: number, data: CreateLessonDto) {
  try {
    const res = await axios.post<LessonResponse>(`modules/${moduleId}/lessons`, data)

    const result = await transformAndValidate(LessonResponse, res.data)

    return result
  } catch (error) {
    if (error instanceof Array && error.length) {
      throw new ResponseValidateError(new Error(error.toString()))
    }
    return Promise.reject(error)
  }
}
