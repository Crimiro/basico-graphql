'use strict'

const { graphql, buildSchema } = require('graphql');

//Definiendo el schema inicial
const schema = buildSchema(`
  type Query {
    hello: String,
    saludo: String
  }
`)

// Configurar los resolvers
const resolvers = {
  hello: () => {
    return 'Hola Mundo!'
  },
  saludo: () => {
    return 'Hola a todos'
  }
}

// Ejecutar el query
// Se envia el schema y el argumento a ejecutar
graphql(schema, '{ hello, saludo }', resolvers).then((data) => {
  console.log(data);
})