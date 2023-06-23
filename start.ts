import { app_client } from './src/CLIENT';
import { server } from './src/SERVER';
import { app_rest } from './src/REST';
import { app_graphql } from './src/GRAPHQL';
const grpc = require('@grpc/grpc-js');

// PORTA'S
const PORT_CLIENT = 3000;
const PORT_GRPC = 5051;
const PORT_REST = 3001
const PORT_GRAPHQL = 3002

// Inicie o servidor gRPC
server.bindAsync(
  `0.0.0.0:${PORT_GRPC}`,
  grpc.ServerCredentials.createInsecure(),
  (err: any, port: number ) => {
    if (err != null) {
      console.error(err);
    }
    server.start()
    console.log(`Server do GRPC em execução na porta  127.0.0.1:${port}`)
  }
);

// Inicie o servidor do cliente no Express.js
app_client.listen(PORT_CLIENT, () => {
  console.log(`Cliente do Express.js em execução na porta http://localhost:${PORT_CLIENT}`);
});

// Inicie o servidor REST no Express.js
app_rest.listen(PORT_REST, () => {
  console.log(`REST do Express.js em execução na porta http://localhost:${PORT_REST}`);
});
  
// Inicie o servidor GRAPHQL no Express.js
app_graphql.listen(PORT_GRAPHQL, () => {
  console.log(`GRAPHQL do Express.js em execução na porta http://localhost:${PORT_GRAPHQL}/graphql`);
});
  