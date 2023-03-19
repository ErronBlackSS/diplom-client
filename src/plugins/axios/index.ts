import axios from 'axios'
import interceptors from './interceptors'

const url = import.meta.env.VITE_APP_SERVER_API

const instance = axios.create({
  baseURL: url
})

interceptors(instance)

export default instance
