const createError = require('http-errors')
const { Register } = require('../models')

const updateCheckIn = async (req, res, next) => {
  try {
    const { id_participant } = req.params

    const checkParticipant = await Register.checkParticipant(id_participant)
    
    if (!checkParticipant) {
      return next(createError.NotFound('Id Participant cant found!'))
    }

    if (checkParticipant.validate_on !== null || '') {
      return next(createError.BadRequest('participant have checked in!'))
    }

    await Register.update(id_participant).then(() => {
      res.status(200).json({
        status: 200,
        message: "Update Check in Successfully!"
      })
    })

  } catch (error) {
    next(error)
  }
}

module.exports = updateCheckIn