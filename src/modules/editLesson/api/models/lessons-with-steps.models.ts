import { Type } from 'class-transformer'
import { IsString, IsNumber, IsArray, IsBoolean, IsIn } from 'class-validator'
import { LessonWithSteps, TestAnswer, StepType } from '../../types/lessons-with-steps'

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

export class TestResponse {
  @IsNumber()
  id: number

  @IsNumber()
  stepId: number

  @Type(() => AnswerResponse)
  answers: TestAnswer
}

export class AnswerResponse {
  @IsNumber()
  id: number

  @IsNumber()
  testId: number

  @IsBoolean()
  isRight: boolean

  @IsString()
  name: string
}
