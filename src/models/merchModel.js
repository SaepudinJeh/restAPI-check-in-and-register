const { dbConnect } = require('../helpers')

class Merch {
  constructor(merchData) {
    this.merchData = { ...merchData}
  }

  static save() {
    return new Promise((resolve, reject) => {
      try {
        const data = ['wkwkwk', 'cuk', 'wkwkwkw']

        dbConnect('merch', async (db) => {
          const merch = await db.insertOne({
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