/**
 * @param {string} text 
 * @param {{[key: string]: any}} others 
 */
export default (text, others) => ({
  error: text,
  ...others,
})
