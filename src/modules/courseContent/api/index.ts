import { ResponseValidateError } from '@/helpers/error_validation'
import { convertToOrderRequest, convertFromOrderResponse } from '@/helpers/functions'
import axios from '@/plugins/axios'
import { transformAndValidate } from 'class-transformer-validator'
import { CourseChecklist, CourseContent, Module } from '../types'
import { convertFromLessonResponse, CreateLessonDto, LessonResponse } from './models/lessons.models'
import { CreateModuleDto, getCourseContentResponse } from './models/module.models'

export async function createModule(data: CreateModuleDto): Promise<Module> {
  try {
    const res = await axios.post(`modules/create`, data)
    return res.data
  } catch (error) {
    return Promise.reject(error)
  }
}

export async function getCourseContent(courseId: number): Promise<CourseContent> {
  try {
    const res = await axios.get<getCourseContentResponse>(`courses/${courseId}/content`)

    const result = await transformAndValidate(getCourseContentResponse, res.data)

    const convertedModules = result.modules.map((module) => {
      const convertedLessons = module.lessons.map((lesson) => {
        return { ...lesson, order: convertFromOrderResponse(lesson.order) }
      })
      return { ...module, lessons: convertedLessons }
    })

    return { modules: convertedModules }
  } catch (error) {
    if (error instanceof Array && error.length) {
      throw new ResponseValidateError(new Error(error.toString()))
    }
    return Promise.reject(error)
  }
}

export async function getCourseCheckList(courseId: number): Promise<CourseChecklist> {
  try {
    const res = await axios.get<CourseChecklist>(`courses/${courseId}/checklist`)

    return res.data
  } catch (error) {
    if (error instanceof Array && error.length) {
      throw new ResponseValidateError(new Error(error.toString()))
    }
    return Promise.reject(error)
  }
}

export async function createLesson(data: CreateLessonDto) {
  try {
    const res = await axios.post<LessonResponse>(`lessons/create`, data)

    const result = await transformAndValidate(LessonResponse, res.data)

    return convertFromLessonResponse(result)
  } catch (error) {
    if (error instanceof Array && error.length) {
      throw new ResponseValidateError(new Error(error.toString()))
    }
    return Promise.reject(error)
  }
}

export async function changeLessonOrder(lessonId: number, newOrder: number) {
  try {
    const res = await axios.patch<LessonResponse>(`/lessons/${lessonId}/order`, {
      order: convertToOrderRequest(newOrder)
    })

    return res.data
  } catch (error) {
    if (error instanceof Array && error.length) {
      throw new ResponseValidateError(new Error(error.toString()))
    }
    return Promise.reject(error)
  }
}

export async function updateModule(moduleId: number, data: Partial<Module>) {
  try {
    const res = await axios.patch(`modules/${moduleId}/update`, data)

    return res.data
  } catch (error) {
    return Promise.reject(error)
  }
}

export async function deleteLesson(lessonId: number) {
  try {
    const res = await axios.delete(`/lessons/${lessonId}/delete`)

    return res.data
  } catch (error) {
    return Promise.reject(error)
  }
}
