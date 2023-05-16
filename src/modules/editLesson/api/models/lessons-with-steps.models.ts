import { IsString, IsNumber, IsArray } from 'class-validator'
import { LessonWithSteps } from '../../types/lessons-with-steps'

export class ModuleLessonsWithStepsResponse {
  @IsString()
  moduleName: string

  @IsNumber()
  moduleId: number

  @IsArray()
  lessons: LessonWithSteps[]
}
