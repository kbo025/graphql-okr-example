'use strict'

const objetives = [
  {
    _id: 'O1',
    title: 'obj 1',
    description: 'obj 1'
  },
  {
    _id: 'O2',
    title: 'obj 2',
    description: 'obj 2'
  },
  {
    _id: 'O3',
    title: 'obj 3',
    description: 'obj 3'
  }
]

module.exports = {
  Query: {
    getObjetives: () => {
      return objetives
    },
    getObjetive: (root, args) => {
      const obj = objetives.find(o => o._id === args.id)
      return obj
    }
  }
}
