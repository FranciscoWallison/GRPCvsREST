const express = require('express');
const app_rest = express();

const swaggerUi = require("swagger-ui-express"),
swaggerDocument = require("./swagger.json");

// INICIANDO O BANCO
import { listaClientes } from '../../db/fakeDB'; 

// Rota do Express.js
app_rest.get('/clientes', (req: any, res: any) => {
  // ObterClienteAll
  res.send(listaClientes);
});

app_rest.put('/clientes', (req: any, res: any) => {
  // CriarCliente
  res.send(listaClientes);
});

// ...

app_rest.use(
  '/api-docs',
  swaggerUi.serve, 
  swaggerUi.setup(swaggerDocument)
);

export { app_rest };