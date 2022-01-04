const createError = require('http-errors')
const { Register, Merch } = require('../models')

const findIdParticipant = async (req, res, next) => {
  try {
    const { id_participant, id_seminar } = req.params

    console.table([id_participant, id_seminar]);
    
    const participant = await Register.checkParticipant(id_participant, id_seminar)

    if (!participant) {
      return next(createError.NotFound())
    }

    const merch = await Merch.findByIdParticipant(id_participant)


    // const { data } = await callAPi(`http://lumintu-tiket.tamiaindah.xyz:8055/items/order?fields=customer_id.customer_id,customer_id.customer_name,ticket_id.ticket_id,ticket_id.ticket_type&filter[customer_id]=${id_participant}`)
    
    // const ticketId = data[0].ticket_id.ticket_type
  
    // console.log(ticketId);
    // const merchs = merch(ticketId)

    res.status(200).json({
      status: 200,
      data: {
        participant,
        merch
      }
    })
  } catch (error) {
    next(error)
  }
}

module.exports = findIdParticipant