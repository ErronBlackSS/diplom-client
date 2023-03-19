import { IsString } from 'class-validator'

export class TokensResponse {
  @IsString()
  access_token: string

  @IsString()
  refresh_token: string
}
