const saveParticipantRegister = require('./saveParticipantRegister')
const findIdParticipant = require('./findIdParticipant')
const updateCheckIn = require('./updateCheckIn')
const findAll = require('./findAll')
const removeAll = require('./removeAllParticipants')

module.exports = {
  saveParticipantRegister,
  findIdParticipant,
  updateCheckIn,
  findAll,
  removeAll
}