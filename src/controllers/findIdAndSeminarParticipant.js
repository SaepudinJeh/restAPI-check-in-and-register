const createError = require('http-errors')
const { Register } = require('../models')

const findIdParticipant = async (req, res, next) => {
  try {
    const { id_participant, id_seminar } = req.params

    console.table([id_participant, id_seminar]);
    
    const participant = await Register.checkParticipant(id_participant, id_seminar)

    if (!participant) {
      return next(createError.NotFound())
    }

    res.status(200).json({
      status: 200,
      data: {
        participant
      }
    })
  } catch (error) {
    console.log(error);
    next(error)
  }
}

module.exports = findIdParticipant