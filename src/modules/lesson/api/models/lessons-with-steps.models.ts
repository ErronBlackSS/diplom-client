import { IsString, IsArray } from 'class-validator'
import { ModulesWithLessons } from '../../types/modules-with-lessons'

export class ModulesWithLessonsResponse {
  @IsString()
  courseName: string

  @IsArray()
  modules: ModulesWithLessons[]
}
