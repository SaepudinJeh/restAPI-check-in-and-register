const router = require('express').Router()

const { saveParticipantRegister, findIdParticipant, updateCheckIn, findAll } = require('../controllers')

router
  .get('/', (req, res, next) => {
    res.send('wwkwkwkw')
  })
  .get('/v1/participants', findAll)
  .get('/v1/participant/:id_participant', findIdParticipant)
  .post('/v1/register', saveParticipantRegister)
  .patch('/v1/check/:id_participant', updateCheckIn)


module.exports = router