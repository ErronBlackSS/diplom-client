import { ResponseValidateError } from '@/helpers/error_validation'
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
    if (error instanceof Array && error.length) {
      throw new ResponseValidateError(new Error(error.toString()))
    }
    return Promise.reject(error)
  }
}

export async function getUserCourses(): Promise<Course[]> {
  try {
    const res = await axios.get<CourseResponse[]>('/courses')

    const result = await transformAndValidate(CourseResponse, res.data)

    return convertCourseResponseToCourse(result)
  } catch (error) {
    if (error instanceof Array && error.length) {
      throw new ResponseValidateError(new Error(error.toString()))
    }
    return Promise.reject(error)
  }
}

export async function deleteCourse(courseId: number) {
  try {
    const res = await axios.delete(`/courses/${courseId}`)

    return res.data
  } catch (error) {
    return Promise.reject(error)
  }
}

export async function updateCourse(courseId: number, data: Partial<Course>) {
  try {
    const res = await axios.patch<CourseResponse>(`/courses/${courseId}/update`, data)

    const result = await transformAndValidate(CourseResponse, res.data)

    return result
  } catch (error) {
    if (error instanceof Array && error.length) {
      throw new ResponseValidateError(new Error(error.toString()))
    }
    return Promise.reject(error)
  }
}
