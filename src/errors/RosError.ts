export default class RosError extends Error {

  code: number

  constructor(message: string, code: number = 500) {
    super(message)
    this.code = code
    this.name = 'RosError'
  }
}