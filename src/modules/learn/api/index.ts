import { ResponseValidateError } from '@/helpers/error_validation'
import axios from '@/plugins/axios'
import { transformAndValidate } from 'class-transformer-validator'
import { LearnCourseResponse } from './models/learn.models'

export async function getUserCourses(): Promise<LearnCourseResponse[]> {
  try {
    const res = await axios.get<LearnCourseResponse[]>('/courses/userCourses')

    const result = await transformAndValidate(LearnCourseResponse, res.data)

    return result
  } catch (error) {
    if (error instanceof Array && error.length) {
      throw new ResponseValidateError(new Error(error.toString()))
    }
    return Promise.reject(error)
  }
}
