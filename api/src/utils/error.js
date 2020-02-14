/**
 * @param {string} text 
 * @param {{[key: string]: any}} others 
 */
export default (text, others) => ({
  error: text,
  ...others,
})

export class ErrorsGenerator {
  /** @type {string[]} */
  messages = []

  /**
   * @param {boolean} condition 
   * @param {string} message 
   */
  assert(condition, message) {
    if (!condition) {
      this.push(message)
    }
  }

  /**
   * @param {string} message 
   */
  push(message) {
    this.messages.push(message)
  }

  get has_errors() {
    return this.messages.length > 0
  }
}
