import { IsString } from 'class-validator'

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
