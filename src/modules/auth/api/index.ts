import axios from '@/plugins/axios'
import * as responses from '../models/'

export async function singin(email: string, password: string): Promise<responses.TokensResponse> {
  try {
    const res = await axios.post<responses.TokensResponse>('/auth/signin', { email, password })

    return res.data
  } catch (error) {
    return Promise.reject(error)
  }
}

export async function singup(email: string, password: string): Promise<responses.TokensResponse> {
  try {
    const res = await axios.post<responses.TokensResponse>('/auth/signin', { email, password })

    return res.data
  } catch (error) {
    return Promise.reject(error)
  }
}
