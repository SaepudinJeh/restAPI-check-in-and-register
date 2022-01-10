const createError = require('http-errors')
const { Register, Merch } = require('../models')

const findIdParticipant = async (req, res, next) => {
  try {
    const { id_participant, id_seminar } = req.params
    
    const participant = await Register.checkParticipant(id_participant, id_seminar)

    if (!participant) {
      return next(createError.BadRequest('Cant result Participant!'))
    }

    const { merch } = await Merch.findMerchByTicketType(participant.ticket_type)

    res.status(200).json({
      status: 200,
      data: {
        participant,
        merch
      }
    })
  } catch (error) {
    console.log(error);
    next(error)
  }
}

module.exports = findIdParticipant