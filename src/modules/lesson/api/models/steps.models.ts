import { IsNullable } from '@/helpers/functions'
import { Type } from 'class-transformer'
import { IsNumber, IsBoolean, IsString, IsIn, IsArray, ValidateNested } from 'class-validator'
import { StepType, TestAnswer } from '../../types/steps'

export class StepContentResponse {
  @Type(() => StepContent)
  step: StepContent

  @IsString()
  @IsIn(['TEXT', 'TEST'])
  type: StepType

  @Type(() => TestResponse)
  @ValidateNested()
  @IsNullable()
  test: TestResponse | null
}

export class StepResponse {
  @IsNumber()
  id: number

  @IsString()
  @IsIn(['TEXT', 'TEST'])
  type: StepType
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

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AnswerResponse)
  answers: TestAnswer[]
}

export class AnswerResponse {
  @IsNumber()
  id: number

  @IsNumber()
  order: number

  @IsNumber()
  testId: number

  @IsBoolean()
  isRight: boolean

  @IsString()
  name: string
}
