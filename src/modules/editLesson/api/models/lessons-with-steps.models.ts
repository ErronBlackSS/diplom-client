import { IsString, IsNumber, IsArray, IsIn } from 'class-validator'
import { LessonWithSteps, StepType } from '../../types/lessons-with-steps'

export class ModuleLessonsWithStepsResponse {
  @IsString()
  moduleName: string

  @IsNumber()
  moduleId: number

  @IsArray()
  lessons: LessonWithSteps[]
}

export class StepResponse {
  @IsNumber()
  id: number

  @IsString()
  @IsIn(['TEXT', 'TEST'])
  type: StepType
}
