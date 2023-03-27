import axios from '@/plugins/axios'
import { AxiosError } from 'axios'
import * as responses from '../models/'
import { USER_ALREADY_EXISTS, EMAIL_VERIFICATION_CONFLICT } from '../utils/error.constants'

export async function singin(email: string, password: string): Promise<responses.TokensResponse> {
  try {
    const res = await axios.post<responses.TokensResponse>('/auth/signin', { email, password })

    return res.data
  } catch (error) {
    return Promise.reject(error)
  }
}

export async function singup(email: string, password: string): Promise<responses.SignupResponse> {
  try {
    const res = await axios.post<responses.SignupResponse>('/auth/signup', { email, password })
    return res.data
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.data?.message === USER_ALREADY_EXISTS) {
        return Promise.reject('Данный email уже зарегистрирован!')
      } else if (error.response?.data?.message === EMAIL_VERIFICATION_CONFLICT) {
        return Promise.reject('Некорректный email')
      } else {
        return Promise.reject('Непредвиденная ошибка')
      }
    }
    return Promise.reject(error)
  }
}

export async function confirmEmail(token: string) {
  try {
    const res = await axios.post('/auth/confirmEmail', { token })
    return res.data
  } catch (error) {
    Promise.reject(error)
  }
}
