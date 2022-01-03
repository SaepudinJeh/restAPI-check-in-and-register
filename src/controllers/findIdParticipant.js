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

    const { data } = await callAPi(`https://api-ticket.arisukarno.xyz/items/order?fields=customer_id.customer_id,customer_id.customer_name,ticket_id.ticket_id,ticket_id.ticket_type&filter[customer_id]=${id_participant}`)

    const ticketId = data[0].ticket_id.ticket_type

    const merchs = merch(ticketId)

    res.status(200).json({
      status: 200,
      data: {
        participant, merchs
      }
    })
  } catch (error) {
    next(error)
  }
}

module.exports = findIdParticipant