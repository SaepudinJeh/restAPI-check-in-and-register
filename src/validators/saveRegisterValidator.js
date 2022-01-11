const Joi = require('joi')

const checkSaveRegister = Joi.object({
  id_participant: Joi.string().required(),
  id_seminar: Joi.string().required(),
  validate_on: Joi.date().default(''),
  validate_by: Joi.string().default(''),
  ticket_type: Joi.string().required(),
  create_at: Joi.date().default(new Date(Date.now()))
})

module.exports = checkSaveRegister