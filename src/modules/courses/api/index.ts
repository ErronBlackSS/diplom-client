import axios from '@/plugins/axios'
import { transformAndValidate } from 'class-transformer-validator'
import { Course } from '../types/.'
import * as responses from './models/course.models'

export async function createCourse(name: string): Promise<Course> {
  try {
    const res = await axios.post<responses.CourseResponse>('/courses', {
      name
    })

    const validatedCourse = await transformAndValidate(responses.CourseResponse, res.data)

    return validatedCourse
  } catch (error) {
    return Promise.reject(error)
  }
}

export async function getUserCourses(): Promise<Course[]> {
  try {
    const res = await axios.get<responses.CourseResponse[]>('/courses')

    const validatedCourses = await transformAndValidate(responses.CourseResponse, res.data)

    return responses.convertCourseResponseToCourse(validatedCourses)
  } catch (error) {
    return Promise.reject(error)
  }
}
