import axios from '@/plugins/axios'
import { ResponseValidateError } from '@/helpers/error_validation'
import { transformAndValidate } from 'class-transformer-validator'
import { ModulesWithLessonsResponse } from './models/lessons-with-steps.models'

export async function getLessonContent(moduleId: number) {
  try {
    const res = await axios.get<ModulesWithLessonsResponse>(
      `lessons/${moduleId}/modules-with-lessons`
    )
    const result = await transformAndValidate(ModulesWithLessonsResponse, res.data)

    return result
  } catch (error) {
    if (error instanceof Array && error.length) {
      throw new ResponseValidateError(new Error(error.toString()))
    }
    return Promise.reject(error)
  }
}
