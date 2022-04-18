'use strict'

const connectDb = require('../../lib/db/db')
const { ObjectID } = require('mongodb')

module.exports = {
  createObjetive: async (root, { input }) => {
    const defaults = {
      //  teacher: '',
      //  topic: ''
    }

    const newObj = Object.assign(defaults, input)
    let db
    let obj

    try {
      db = await connectDb()
      obj = await db.collection('objetives').insertOne(newObj)
      newObj._id = obj.insertedId
    } catch (error) {
      console.error(error)
    }

    return obj
  },
  updateObjetive: async (root, { _id, input }) => {
    let db
    let obj

    try {
      db = await connectDb()
      await db.collection('objetives').updateOne(
        { _id: ObjectID(_id) },
        { $set: input }
      )
      obj = await db.collection('objetives').findOne({ _id: ObjectID(_id) })
    } catch (error) {
      console.error(error)
    }

    return obj
  },
  deleteObjetive: async (root, { _id }) => {
    let db

    try {
      db = await connectDb()
      await db.collection('objetives').deleteOne({ _id: ObjectID(_id) })

      return true
    } catch (error) {
      console.error(error)
    }

    return false
  }
}
