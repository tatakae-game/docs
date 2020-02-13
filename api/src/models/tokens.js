const db = require('../db')

const model = db.model('Token', {
  value: { type: String },
  expires: { type: Date, },
})

exports.model = model

const length = 128
exports.length = length

exports.check = async (token) => {
  if (!token) return false
  if ((typeof token) != 'string') return false
  if (length != token.length) return false

  try {
    const res = await model.findOne({
      value: token,
      expires: { $gt: Date.now, }
    }).exec()
  } catch (e) {
    return false
  }
}
