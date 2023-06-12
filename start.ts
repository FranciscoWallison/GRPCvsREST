import { app_client } from './src/CLIENT';
import { server } from './src/SERVER';
import { app_rest } from './src/REST';
const grpc = require('@grpc/grpc-js');

// PORTA'S
const PORT_CLIENT = 3000;
const PORT_GRPC = 5051;
const PORT_REST = 3001

// Inicie o servidor gRPC
server.bindAsync(
  `0.0.0.0:${PORT_GRPC}`,
  grpc.ServerCredentials.createInsecure(),
  (err: any, port: number ) => {
    if (err != null) {
      console.error(err);
    }
    server.start()
    console.log(`Server do GRPC em execução na porta  localhost:${port}`)
  }
);

// Inicie o servidor do cliente no Express.js
app_client.listen(PORT_CLIENT, () => {
  console.log(`Cliente do Express.js em execução na porta localhost:${PORT_CLIENT}`);
});
  
app_rest.listen(PORT_REST, () => {
  console.log(`REST do Express.js em execução na porta localhost:${PORT_REST}`);
});
  
