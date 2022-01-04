const { Merch } = require('../models')

const findMerchById = async (req, res, next) => {
  try {
    const { id_merch } = req.params
    const merch = await Merch.findByIdMerch(id_merch)

    res.status(200).json({
      status: 200,
      merch
    })
  } catch (error) {
    next(error)
  }
}

module.exports = findMerchById