const { ObjectId } = require('mongodb')
const { dbConnect } = require('../helpers')

class Merch {
  constructor(merchData) {
    this.merchData = { ...merchData}
  }

  static updateGivenMerch(id) {
    return new Promise((resolve, reject) => {
      try {
        dbConnect('merch', async (db) => {
          const merch = await db.updateOne(
            {_id: ObjectId(id)},
            { $set : 
              { given_on: new Date() }
            }  
          )

          resolve(merch)
        })
      } catch (error) {
        return reject(error)
      }
    })
  }

  static findMerchByIdParticipant(id_participant) {
    return new Promise((resolve, reject) => {
      try {
        dbConnect('merch', async (db) => {
          const merch = await db.findOne({ id_participant })

          resolve(merch)
        })
      } catch (error) {
        return reject(error)
      }
    })
  }

  save() {
    return new Promise((resolve, reject) => {
      try {
        const { ticket_type, merch } = this.merchData

        dbConnect('merch', async (db) => {
          const merchandise = await db.insertOne({
            ticket_type,
            merch
          })

          resolve(merchandise)
        })
      } catch (error) {
        console.log(error)
        return reject(error)
      }
    })
  }
}

module.exports = Merch