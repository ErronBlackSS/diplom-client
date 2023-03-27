import { isUUID as uuid } from 'class-validator'

export function isEmailValid(email: string): boolean {
  return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{1,3})+$/.test(email)
}

export function isUUID(value: string) {
  return uuid(value, 4)
}
