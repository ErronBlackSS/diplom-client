import { IsNullable } from '@/helpers/functions'
import { IsBoolean, IsNumber, IsString } from 'class-validator'
import { Course } from '../../types'

export class CourseResponse {
  @IsNumber()
  id: number

  @IsString()
  name: string

  @IsString()
  dateCreate: string

  @IsBoolean()
  published: boolean

  @IsNumber()
  creatorId: number

  @IsString()
  @IsNullable()
  promo: string | null

  @IsString()
  @IsNullable()
  imagePath: string | null
}

export function convertFromCourseResponse(course: CourseResponse): Course {
  return {
    id: course.id,
    name: course.name,
    dateCreate: course.dateCreate,
    creatorId: course.creatorId,
    published: course.published,
    promo: course.promo,
    imagePath: course.imagePath
  }
}

export function convertCourseResponseToCourse(course: CourseResponse): Course
export function convertCourseResponseToCourse(course: CourseResponse[]): Course[]
export function convertCourseResponseToCourse(
  course: CourseResponse | CourseResponse[]
): Course | Course[] {
  if (Array.isArray(course)) {
    return course.map((course) => convertFromCourseResponse(course))
  }

  return convertFromCourseResponse(course)
}
