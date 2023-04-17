import { IsNumber, IsString } from 'class-validator'

export class UserResponse {
  @IsNumber()
  id: number

  @IsString()
  email: string
}
