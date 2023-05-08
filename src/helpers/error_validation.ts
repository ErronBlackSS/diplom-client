export class ResponseValidateError extends Error {
  constructor(error: Error) {
    super(error.toString())
    this.name = 'ResponseValidateError'
    if (error.stack) this.stack = error.stack

    Object.setPrototypeOf(this, ResponseValidateError.prototype)
  }
}
