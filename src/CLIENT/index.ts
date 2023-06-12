const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const express = require('express');
const app_client = express();
const dir_file_proton = './grpcProto/cliente.proto';
const PORT_GRPC = 5051;

// Carregando o arquivo de definição do protobuf
const packageDefinition = protoLoader.loadSync(dir_file_proton);
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const service = protoDescriptor.ClienteService;


// Rota do Express.js para testar a conexão gRPC
app_client.get('/clientes', (req: any, res: any) => {
  const client = new service(`localhost:${PORT_GRPC}`, grpc.credentials.createInsecure());

  // Chamada de método gRPC
  client.ObterClienteAll({}, (error: any, response: any) => {
    if (error != null) {
      console.error(error);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.send(response);
  });

});

export { app_client };