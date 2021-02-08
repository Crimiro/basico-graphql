'use strict'

const { graphql, buildSchema } = require('graphql');

//Definiendo el schema inicial
const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

// Ejecutar el query
// Se envia el schema y el argumento a ejecutar
graphql(schema, '{ hello }').then((data) => {
  console.log(data);
})