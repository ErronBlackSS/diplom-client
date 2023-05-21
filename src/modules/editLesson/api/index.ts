import { ResponseValidateError } from '@/helpers/error_validation'
import axios from '@/plugins/axios'
import { transformAndValidate } from 'class-transformer-validator'
import { ModuleLessonsWithStepsResponse } from './models/lessons-with-steps.models'

export async function getEditLessonContent(moduleId: number) {
  try {
    const res = await axios.get<ModuleLessonsWithStepsResponse>(`lessons/${moduleId}/with-steps`)
    const result = await transformAndValidate(ModuleLessonsWithStepsResponse, res.data)

    return result
  } catch (error) {
    if (error instanceof Array && error.length) {
      throw new ResponseValidateError(new Error(error.toString()))
    }
    return Promise.reject(error)
  }
}
