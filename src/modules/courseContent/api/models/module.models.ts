import { Type } from 'class-transformer'
import { IsString, IsNumber, IsArray, ValidateNested } from 'class-validator'
import { LessonResponse } from './lessons.models'

export class CreateModuleDto {
  @IsString()
  name: string

  @IsNumber()
  courseId: number

  @IsNumber()
  order: number
}

class ModuleResponse {
  @IsNumber()
  id: number

  @IsNumber()
  courseId: number

  @IsString()
  name: string

  @IsString()
  description: string

  @IsNumber()
  order: number

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => LessonResponse)
  lessons: LessonResponse[]
}

export class getCourseContentResponse {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ModuleResponse)
  modules: ModuleResponse[]
}
