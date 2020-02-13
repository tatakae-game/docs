const db = require('../db')

const model = db.model('Token', {
  value: { type: String },
  expires: { type: Date, },
})

exports.model = model
