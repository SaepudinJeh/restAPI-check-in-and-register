const { Register, Merch } = require('../models')

const saveParticipantRegister = async (req, res, next) => {
  try {
    const register = new Register(req.body)

    await register.save()
    await Merch.save(req.body.id_participant)

    res.status(200).json({
      status: 200,
      message: "Save register Successfully"
    })
  } catch (error) {
    console.log(error);
    next(error)
  }
}

module.exports = saveParticipantRegister