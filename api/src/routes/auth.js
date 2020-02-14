import { Router } from 'express'
const router = Router()
export default router

import argon2 from 'argon2'

import * as auth from '../auth'
import { ErrorsGenerator } from '../utils/error'

import * as users from '../models/users'

router.post('/auth/check', async (req, res) => {
  const token = req.token

  if (await auth.check(token)) {
    res.send({
      pass: true,
    })
  } else {
    res.status(403).send(auth.invalid_token())
  }
})

router.post('/auth/register', async (req, res, next) => {
  const connected = await auth.check(req.token)
  if (connected) return next()

  const { username, email, password } = req.body || {}
  const errors = new ErrorsGenerator()

  if (users.username_regex.test(username)) {
    errors.assert(!users.model.exists({ username }), "This username is already used.")
  } else {
    errors.push("The username doesn't match the conditions.")
  }

  if (users.email_regex.test(email)) {
    errors.assert(!users.model.exists({ email }), "This email is already used.")
  } else {
    errors.push("The email is not valid.")
  }

  errors.assert(users.password_regex.test(password), "The password doesn't match the conditions.")

  if (errors.has_errors) {
    return res.status(400).send({
      errors: errors.messages,
    })
  }

  await users.model.create({
    username,
    email,
    password: await argon2.hash(password),
  })

  res.send({
    success: true,
  })
})
