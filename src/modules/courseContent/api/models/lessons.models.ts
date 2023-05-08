import { IsNumber, IsString } from 'class-validator'

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
  order: number
}
