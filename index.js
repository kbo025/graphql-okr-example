'use strict'

require('dotenv').config()

const { makeExecutableSchema } = require('@graphql-tools/schema')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')
const resolversObjetive = require('./entities/objetive/resolvers')
const PORT = process.env.port || 4000

// Construct a schema, using GraphQL schema language
const typeDefObjetive = readFileSync(
  join(__dirname, 'entities', 'objetive', 'schema.graphql'),
  'utf-8'
)
const schemaObjetive = makeExecutableSchema({ typeDefs: typeDefObjetive, resolvers: resolversObjetive })

const app = express()

app.use('/objetive', graphqlHTTP({
  schema: schemaObjetive,
  rootValue: resolversObjetive,
  graphiql: true
}))

app.listen(PORT)

console.log('Running a GraphQL API server at http://localhost:4000')
