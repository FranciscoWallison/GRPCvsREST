const express = require('express');
const app_rest = express();
// INICIANDO O BANCO
import { listaClientes } from '../../db/fakeDB'; 


// Rota do Express.js
app_rest.get('/clientes', (req: any, res: any) => {
  res.send(listaClientes);
});

export { app_rest };