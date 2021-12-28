const createError = require('http-errors')
const { Register } = require('../models')

const findIdParticipant = async (req, res, next) => {
  try {
    const { id_participant } = req.params
    
    const result = await Register.checkParticipant(id_participant)

    if (!result) {
      return next(createError.NotFound())
    }

    res.status(200).json({
      status: 200,
      data: result
    })
  } catch (error) {
    next(error)
  }
}

module.exports = findIdParticipant