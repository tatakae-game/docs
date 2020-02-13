/**
 * @param {string} text 
 * @param {{[key: string]: any}} others 
 */
module.exports = (text, others) => ({
  error: text,
  ...others,
})
