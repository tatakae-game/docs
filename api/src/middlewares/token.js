/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {import('express').NextFunction} next 
 */
module.exports = (req, res, next) => {
  req.token = req.headers?.authorization || req.cookies?.token || req.body?.token || req.query?.token

  next()
}