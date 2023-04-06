import { IsNumber, IsString } from 'class-validator'
import { Type } from 'class-transformer'
export class SignupResponse {
  @IsString()
  status: string
}
export class TokensResponse {
  @IsString()
  access_token: string

  @IsString()
  refresh_token: string
}

export class UserResponse {
  @IsNumber()
  id: number

  @IsString()
  email: string
}

export class RegisterResponse {
  @Type(() => UserResponse)
  user: UserResponse

  @Type(() => TokensResponse)
  tokens: TokensResponse
}
