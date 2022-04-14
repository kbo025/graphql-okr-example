'use strict'

const connectDb = require('../db/db')
const { ObjectID } = require('mongodb')

module.exports = {
  Query: {
    getObjetives: async () => {
      let db
      let objetives = []

      try {
        db = await connectDb()
        objetives = await db.collection('objetives').find().toArray()
      } catch (error) {
        console.error(error)
      }

      return objetives
    },
    getObjetive: async (root, args) => {
      let db;
      let objetive;

      try {
        db = await connectDb();
        objetive = await db.collection('objetives').findOne({ _id: ObjectID(args.id) });

      } catch (error) {
        console.error(error);

      }

      return objetive
    }
  }
}
