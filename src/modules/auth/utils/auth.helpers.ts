import axiosInstance from '@/plugins/axios/.'

type userTokens = {
  accessToken: string
  refreshToken: string
}

export function getUserTokens(): userTokens {
  return {
    accessToken: localStorage.getItem('access_token') || '',
    refreshToken: localStorage.getItem('refresh_token') || ''
  }
}

export function removeUserTokens() {
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')
}

export function setUserTokens(userToken: string, refreshToken: string) {
  if (!userToken || !refreshToken) {
    return removeUserTokens()
  }

  localStorage.setItem('access_token', userToken)
  localStorage.setItem('refresh_token', refreshToken)

  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${userToken}`
}

export function isAuthenticated(): boolean {
  const accessToken = getUserTokens().accessToken
  return accessToken !== ''
}
