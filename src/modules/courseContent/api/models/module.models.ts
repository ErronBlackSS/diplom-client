import { Type } from 'class-transformer'
import { IsString, IsNumber, IsArray, ValidateNested } from 'class-validator'

export class CreateModuleDto {
  @IsString()
  name: string

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
}

export class getCourseContentResponse {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ModuleResponse)
  modules: ModuleResponse[]
}
