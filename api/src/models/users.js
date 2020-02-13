import db from '../db'

export const model = db.model('User', {
  username: { type: String, },
  email: { type: String, },
  password: { type: String, },
  created: { type: Date, default: Date.now, },
})
