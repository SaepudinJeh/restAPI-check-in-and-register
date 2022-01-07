const { Merch, Register } = require('../models')

const updateMerchByIdParticipant = async (req, res, next) => {
  try {
    const { id_participant } = req.params

    const merch = await Merch.findMerchByIdParticipant(id_participant)

    console.log(merch);

    const updateMerch = await Merch.updateGivenMerch(merch._id)

    res.status(200).json({
      status: 200,
      updateMerch
    })
  } catch (error) {
    next(error)
  }
}

module.exports = updateMerchByIdParticipant