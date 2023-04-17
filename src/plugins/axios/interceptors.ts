import { refreshAccessToken, signOut } from '@/modules/auth/api'
import { getUserTokens } from '@/modules/auth/utils/auth.helpers'
import { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import axiosInstance from './.'

declare module 'axios' {
  export interface AxiosRequestConfig {
    _retry?: boolean
  }
}

const onResponse = (response: AxiosResponse) => {
  return response
}

async function onError(err: AxiosError) {
  const originalRequest = err.config
  if (!originalRequest) return Promise.reject(err)

  if (err.response?.status === 401 && !originalRequest.url?.includes('refresh')) {
    if (!originalRequest?._retry) {
      originalRequest._retry = true
      try {
        await refreshAccessToken()
      } catch (errRefresh) {
        signOut()
        return Promise.reject(err)
      }
      return axiosInstance.request(originalRequest)
    } else {
      signOut()
    }
  }

  return Promise.reject(err)
}

function setToken(req: InternalAxiosRequestConfig) {
  const token = getUserTokens().accessToken
  if (req.headers && token) {
    req.headers['Authorization'] = `Bearer ${token}`
  }

  return req
}

export default function interceptors(axios: AxiosInstance) {
  axios.interceptors.request.use(setToken)
  axios.interceptors.response.use(onResponse, onError)
}
