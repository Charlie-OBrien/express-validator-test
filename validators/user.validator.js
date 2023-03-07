const { body, validationResult } = require('express-validator')



const userValidationRules = () => {
  return [
    // username must be an email
    body('username').isEmail(),
    // password must be at least 5 chars long
    body('password').isLength({ min: 5 }),
  ]
}

const validate = (request, response, next) => {
  const errors = validationResult(request)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map(error => extractedErrors.push({ [error.param]: error.msg }))

  return response.status(422).json({
    errors: extractedErrors,
  })
}

module.exports = {
  userValidationRules,
  validate,
}