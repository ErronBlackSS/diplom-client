import { isUUID as uuid } from 'class-validator'

export function isEmailValid(email: string): boolean {
  return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{1,3})+$/.test(email)
}

export function isUUID(value: string) {
  return uuid(value, 4)
}

export function debounce<T extends (...args: unknown[]) => void>(fn: T, wait: number) {
  let timer: ReturnType<typeof setTimeout> | null = null

  return function (...args: Parameters<T>) {
    if (timer) {
      window.clearTimeout(timer)
    }
    timer = window.setTimeout(() => {
      fn.call(args)
    }, wait)
  }
}
