import { IsNullable } from '@/helpers/functions'
import { Type } from 'class-transformer'
import { IsNumber, IsBoolean, IsString, IsIn } from 'class-validator'
import { StepType, TestAnswer } from '../../types/lessons-with-steps'

export class StepContentResponse {
  @Type(() => StepContent)
  step: StepContent

  @IsString()
  @IsIn(['TEXT', 'TEST'])
  type: StepType

  @Type(() => TestResponse)
  @IsNullable()
  test: TestResponse | null
}

class StepContent {
  @IsNumber()
  stepId: number

  @IsString()
  content: string
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
