import { AxiosInstance } from 'axios'

export default function interceptors(axios: AxiosInstance) {
  axios.interceptors.request.use()
  axios.interceptors.response.use()
}
