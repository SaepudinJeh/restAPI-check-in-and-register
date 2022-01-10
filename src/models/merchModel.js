const { ObjectId } = require('mongodb')
const { dbConnect } = require('../helpers')

class Merch {
  constructor(merchData) {
    this.merchData = { ...merchData}
  }

  static updateGivenMerch(id, merch) {
    return new Promise((resolve, reject) => {
      try {
        dbConnect('merch-participant', async (db) => {
          const merch = await db.updateOne(
            {_id: ObjectId(id)},
            { $set : 
              { given_on: new Date(),
                merch 
              },
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
        dbConnect('merch-participant', async (db) => {
          const merch = await db.findOne({ id_participant })

          resolve(merch)
        })
      } catch (error) {
        return reject(error)
      }
    })
  }

  static findMerchByTicketType(ticket_type) {
    return new Promise((resolve, reject) => {
      try {
        dbConnect('merch', async (db) => {
          const merch = await db.findOne(
            { ticket_type },
            { projection: { _id: 0, merch: 1 } },
          )

          resolve(merch)
        })
      } catch (error) {
        console.log(error)
        return reject(error)
      }
    })
  }

  save() {
    return new Promise((resolve, reject) => {
      try {
        
        const { ticket_type, merchandise } = this.merchData

        dbConnect('merch', async (db) => {
          const merch = await db.insertOne({
            ticket_type,
            merchandise
          })

          resolve(merch)
        })
      } catch (error) {
        console.log(error)
        return reject(error)
      }
    })
  }
}

module.exports = Merch