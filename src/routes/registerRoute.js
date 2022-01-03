const router = require('express').Router()

const { saveParticipantRegister, findIdAndSeminarParticipant, updateCheckIn, findAll, removeAll, saveMerch } = require('../controllers')

router
  .get('/', (req, res, next) => {
    res.send('wwkwkwkw')
  })
  .post('/v1/merch', saveMerch)
  .get('/v1/participants', findAll)
  .delete('/v1/participants', removeAll)
  .get('/v1/participant/:id_participant/seminar/:id_seminar', findIdAndSeminarParticipant)
  .post('/v1/register', saveParticipantRegister)
  .patch('/v1/check/:id_participant', updateCheckIn)


module.exports = router