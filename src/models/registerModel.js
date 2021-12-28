const ObjectId = require('mongodb').ObjectId
const createError = require('http-errors')

const { dbConnect } = require('../helpers')
const { checkInUpdateValidator, checkSaveRegister } = require('../validators')

class Register {
  constructor(dataPayload) {
    this._dataPayload = { ...dataPayload }
  }


  save() {
    return new Promise((resolve, reject) => {
      try {
        const validation = checkSaveRegister.validate(this._dataPayload)

        if (validation.error) {
          return reject(createError.BadRequest('Payload not Valid!'))
        }

        const {
          id_participant,
          id_seminar,
          validate_on,
          validate_by,
          create_at
        } = validation.value

        dbConnect('participant', async (db) => {
          const result = await db.insertOne({
            id_participant,
            id_seminar,
            validate_on,
            validate_by,
            create_at
          })
          resolve(result)
        })
      } catch (error) {
        console.info(error)
        return reject(error)
      }
    })
  }

  static update(id_participant) {
    return new Promise((resolve, reject) => {
      try {
        dbConnect('participant', async (db) => {
          const result = await db.updateOne(
            { id_participant },
            { $set: { 
              validate_on: new Date(),
              validate_by: 'admin'
            } }
          )
          resolve(result)
        })
      } catch (error) {
        console.info(error)
        return reject(error)
      }
    })
  }

  static checkParticipant(id_participant) {
    return new Promise((resolve, reject) => {
      try {
        dbConnect('participant', async (db) => {
          const result = await db.findOne({ id_participant })
          resolve(result)
        })
      } catch (error) {
        console.info(error)
        return reject(error)
      }
    })
  }
}

module.exports = Register