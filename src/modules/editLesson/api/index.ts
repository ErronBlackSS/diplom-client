import axios from 'axios'
import { transformAndValidate } from 'class-transformer-validator'
import { ModuleLessonsWithStepsResponse } from './models/lessons-with-steps.models'

export async function getEditLessonContent(moduleId: number) {
  try {
    const res = await axios.get<ModuleLessonsWithStepsResponse>(`lessons/${moduleId}/with-steps`)

    const result = await transformAndValidate(ModuleLessonsWithStepsResponse, res.data)

    return result
  } catch (error) {
    return Promise.reject(error)
  }
}
