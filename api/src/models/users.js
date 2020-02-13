const db = require('../db')

const model = db.model('User', {
  username: { type: String, },
  email: { type: String, },
  password: { type: String, },
  created: { type: Date, default: Date.now, },
})

exports.model = model
