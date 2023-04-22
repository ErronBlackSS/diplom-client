import { IsNumber, IsString } from 'class-validator'
import { Course } from '../../types'

export class CourseResponse {
  @IsNumber()
  id: number

  @IsString()
  name: string

  @IsString()
  dateCreate: string

  @IsNumber()
  creatorId: number
}

export function convertFromCourceResponse(course: CourseResponse): Course {
  return {
    id: course.id,
    name: course.name,
    dateCreate: course.dateCreate,
    creatorId: course.creatorId
  }
}

export function convertCourseResponseToCourse(course: CourseResponse): Course
export function convertCourseResponseToCourse(course: CourseResponse[]): Course[]
export function convertCourseResponseToCourse(
  course: CourseResponse | CourseResponse[]
): Course | Course[] {
  if (Array.isArray(course)) {
    return course.map((course) => convertFromCourceResponse(course))
  }

  return convertFromCourceResponse(course)
}
