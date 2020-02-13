const router = require('express').Router()
module.exports = router

const auth = require('../auth')

router.post('/auth/check', (req, res) => {
  const token = req.token

  if (auth.check(token)) {
    res.send({
      pass: true,
    })
  } else {
    res.status(403).send(auth.invalid_token())
  }
})
