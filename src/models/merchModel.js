const { dbConnect } = require('../helpers')

class Merch {
  constructor(merchData) {
    this.merchData = { ...merchData}
  }

  static findByIdParticipant(id_participant) {
    return new Promise((resolve, reject) => {
      try {
        dbConnect('merch', async (db) => {
          const merch = await db.findOne({id_participant})

          resolve(merch)
        })
      } catch (error) {
        return reject(error)
      }
    })
  }

  static save(id_participant) {
    return new Promise((resolve, reject) => {
      try {
        const data = ['ID Card', 'ATK', 'Tote Bag', 'Snack', 'Souvenir']

        dbConnect('merch', async (db) => {
          const merch = await db.insertOne({
            id_participant,
            given_on: '',
            merch: data
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