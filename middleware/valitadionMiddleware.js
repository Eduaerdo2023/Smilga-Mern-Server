import { body, param, validationResult } from 'express-validator'
import { BadRequestError } from '../errors/customErrors.js'
import { JOB_STATUS, JOB_TYPE } from '../utils/constants.js'
import mongoose from 'mongoose'

const withValidationErrors = (validateValues) => {
  return [
    validateValues, (req, res, next) => {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg)
        throw new BadRequestError(errorMessages)
      }
      next()
    },
  ]
}

export const validateJobInput = withValidationErrors([
  body('company').notEmpty().withMessage('company is required'),
  body('position').notEmpty().withMessage('posiiton is required'),
  body('jobLocation').notEmpty().withMessage('job location is required'),
  body('jobStatus').isIn(Object.values(JOB_STATUS)).withMessage('Invalid Status Value'),
  body('jobType').isIn(Object.values(JOB_TYPE)).withMessage('Invalid Type Value')
])

export const validateIdParam = withValidationErrors([
  param('id')
  .custom(value=> mongoose.Types.ObjectId.isValid(value))
  .withMessage('invalid MongoDb id')
])