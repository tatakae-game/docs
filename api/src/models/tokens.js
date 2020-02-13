import db from '../db'

export const model = db.model('Token', {
  value: { type: String },
  expires: { type: Date, },
})

export const length = 128

export async function check(token) {
  if (!token) return false
  if ((typeof token) != 'string') return false
  if (length != token.length) return false

  try {
    await model.findOne({
      value: token,
      expires: { $gt: Date.now, }
    }).exec()

    return true
  } catch (e) {
    return false
  }
}
