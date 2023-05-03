import axios from '@/plugins/axios'
import { transformAndValidate } from 'class-transformer-validator'
import { Course } from '../types/.'
import { CourseResponse, convertCourseResponseToCourse } from './models/course.models'

export async function createCourse(name: string): Promise<Course> {
  try {
    const res = await axios.post<CourseResponse>('/courses', {
      name
    })

    const validatedCourse = await transformAndValidate(CourseResponse, res.data)

    return validatedCourse
  } catch (error) {
    return Promise.reject(error)
  }
}

export async function getUserCourses(): Promise<Course[]> {
  try {
    const res = await axios.get<CourseResponse[]>('/courses')

    const result = await transformAndValidate(CourseResponse, res.data)

    return convertCourseResponseToCourse(result)
  } catch (error) {
    return Promise.reject(error)
  }
}
