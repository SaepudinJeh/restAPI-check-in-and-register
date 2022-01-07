const router = require('express').Router()

const {
  saveParticipantRegister,
  findIdAndSeminarParticipant,
  updateCheckIn,
  findAll,
  removeAll,
  saveMerch,
  findParticipantById,
  updateMerchByIdParticipant
} = require('../controllers')

router
  .get('/', (req, res, next) => {
    res.send('wwkwkwkw')
  })
  .get('/v1/participant/:id_participant', findParticipantById)
  .get('/v1/participants', findAll)
  .get('/v1/participant/:id_participant/seminar/:id_seminar', findIdAndSeminarParticipant)
  .post('/v1/merch', saveMerch)
  .post('/v1/register', saveParticipantRegister)
  .patch('/v1/merch/:id_participant/seminar/:id_seminar', updateMerchByIdParticipant)
  .patch('/v1/participant/:id_participant/seminar/:id_seminar', updateCheckIn)
  .delete('/v1/participants', removeAll)


module.exports = router