const express = require('express');
const { graphqlHTTP } = require("express-graphql")
const { buildSchema } = require("graphql");
const app_graphql = express();
// INICIANDO O BANCO
import { listaClientes } from '../../db/fakeDB';


const schema = buildSchema(`
  type Cliente {
    id: ID
    nome: String
    email: String
    idade: Int
  }
  type Query {
    user(id: ID!): Cliente
    ObterClienteAll: [Cliente]
  }
  type Mutation {
    CriarCliente(nome: String!, email: String!, idade: Int!): Cliente
  }
`);

const providers = {
  listaClientes
}

const resolvers = {
  user({ id }) {
    return  providers.listaClientes.clientes.find(item => item.id === String(id));
  },
  ObterClienteAll() {
    // ObterClienteAll
    return providers.listaClientes.clientes;
  },
  CriarCliente({ nome, email, idade }) {
    // CriarCliente
  }
  // ...
};

app_graphql.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true
  })
);

export { app_graphql };