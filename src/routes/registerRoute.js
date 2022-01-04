const router = require('express').Router()

const {
  saveParticipantRegister,
  findIdAndSeminarParticipant,
  updateCheckIn,
  findAll,
  removeAll,
  saveMerch,
  findParticipantById
} = require('../controllers')

router
  .get('/', (req, res, next) => {
    res.send('wwkwkwkw')
  })
  .get('/v1/participant/:id_participant', findParticipantById)
  .post('/v1/merch', saveMerch)
  .get('/v1/participants', findAll)
  .delete('/v1/participants', removeAll)
  .get('/v1/participant/:id_participant/seminar/:id_seminar', findIdAndSeminarParticipant)
  .post('/v1/register', saveParticipantRegister)
  .patch('/v1/participant/:id_participant/seminar/:id_seminar', updateCheckIn)


module.exports = router