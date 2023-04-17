import axios from '@/plugins/axios'
import { transformAndValidate } from 'class-transformer-validator'
import * as responses from '../models/.'

export async function getMe(): Promise<responses.UserResponse> {
  try {
    const res = await axios.get<responses.UserResponse>('user/me')
    const result = await transformAndValidate(responses.UserResponse, res.data)
    return result
  } catch (error) {
    return Promise.reject(error)
  }
}
