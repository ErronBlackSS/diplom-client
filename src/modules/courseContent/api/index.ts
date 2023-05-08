import { ResponseValidateError } from '@/helpers/error_validation'
import axios from '@/plugins/axios'
import { transformAndValidate } from 'class-transformer-validator'
import { CourseContent, Module } from '../types'
import { CreateLessonDto, LessonResponse } from './models/lessons.models'
import { CreateModuleDto, getCourseContentResponse } from './models/module.models'

export async function createModule(courseId: number, data: CreateModuleDto): Promise<Module> {
  try {
    const res = await axios.post(`courses/${courseId}/module`, data)
    return res.data
  } catch (error) {
    return Promise.reject(error)
  }
}

export async function getCourseContent(courseId: number): Promise<CourseContent> {
  try {
    const res = await axios.get<getCourseContentResponse>(`courses/${courseId}/content`)

    const result = await transformAndValidate(getCourseContentResponse, res.data)

    return result
  } catch (error) {
    if (error instanceof Array && error.length) {
      throw new ResponseValidateError(new Error(error.toString()))
    }
    return Promise.reject(error)
  }
}

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
