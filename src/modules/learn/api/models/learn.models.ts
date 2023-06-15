import { IsNullable } from '@/helpers/functions'
import { IsBoolean, IsNumber, IsString } from 'class-validator'

export class LearnCourseResponse {
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

  @IsNumber()
  stepsCount: number

  @IsNumber()
  passedStepsCount: number
}
