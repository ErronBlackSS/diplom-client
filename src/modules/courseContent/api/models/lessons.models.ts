import { convertFromOrderResponse } from '@/helpers/functions'
import { IsNumber, IsString } from 'class-validator'
import { Lesson } from '../../types/lessons'

export class LessonResponse {
  @IsNumber()
  id: number

  @IsNumber()
  moduleId: number

  @IsString()
  name: string

  @IsNumber()
  order: number
}

export class CreateLessonDto {
  @IsString()
  name: string

  @IsNumber()
  moduleId: number

  @IsNumber()
  order: number
}

export class changeLessonOrderDto {
  @IsNumber()
  order: number
}

export function convertFromLessonResponse(lesson: LessonResponse): Lesson {
  return {
    id: lesson.id,
    name: lesson.name,
    moduleId: lesson.moduleId,
    order: convertFromOrderResponse(lesson.order)
  }
}
