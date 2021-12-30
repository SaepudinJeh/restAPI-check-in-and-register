const createError = require('http-errors')
const { Register } = require('../models')
const { callAPi, merch } = require('../helpers')

const findIdParticipant = async (req, res, next) => {
  try {
    const { id_participant } = req.params
    
    const participant = await Register.checkParticipant(id_participant)

    if (!participant) {
      return next(createError.NotFound())
    }

    const { data } = await callAPi('http://api-ticket.arisukarno.xyz:8055/items/order?fields=customer_id.customer_id,customer_id.customer_name,ticket_id.ticket_id,ticket_id.ticket_type&filter[customer_id]=9')

    const ticketId = data[0].ticket_id.ticket_type

    const merchType = merch(ticketId)

    res.status(200).json({
      status: 200,
      data: {
        participant, merchType 
      }
    })
  } catch (error) {
    next(error)
  }
}

module.exports = findIdParticipant