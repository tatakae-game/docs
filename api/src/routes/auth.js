import { Router } from 'express'
const router = Router()
export default router

import * as auth from '../auth'

router.get('/auth/check', async (req, res) => {
  const token = req.token

  if (await auth.check(token)) {
    res.send({
      pass: true,
    })
  } else {
    res.status(403).send(auth.invalid_token())
  }
})
