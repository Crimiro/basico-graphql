'use strict'

const { graphql, buildSchema } = require('graphql');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const app = express();
const port = process.env.PORT || 3000;

//Definiendo el schema inicial
const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

// Configurar los resolvers
const resolvers = {
  hello: () => {
    return 'Hola Mundo!'
  }
}

app.use('/api', graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`)
})