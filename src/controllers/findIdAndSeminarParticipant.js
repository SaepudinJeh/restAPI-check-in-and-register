const createError = require('http-errors')
const { Register, Merch } = require('../models')

const findIdParticipant = async (req, res, next) => {
  try {
    const { id_participant, id_seminar } = req.params
    
    const participant = await Register.checkParticipant(id_participant, id_seminar)

    if (!participant) {
      return next(createError.BadRequest('Cant result Participant!'))
    }

    const merchandise = await Merch.findMerchByTicketType(participant.ticket_type)

<<<<<<< HEAD
=======
    if(!merchandise) {
      res.status(200).json({
        status: 200,
        data: {
          participant
        }
      })
    }

    const merch = merchandise.merch
>>>>>>> ec4377c7e3caee5fce6546dea589bfb02d81b303

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
