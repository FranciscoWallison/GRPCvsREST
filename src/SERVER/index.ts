const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const dir_file_proton = './grpcProto/cliente.proto';
// INICIANDO O BANCO
import { listaClientes } from '../../db/fakeDB'; 

// Carregando o arquivo de definição do protobuf
const packageDefinition = protoLoader.loadSync(dir_file_proton);
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const myService = protoDescriptor.ClienteService; 

// Implementando o serviço gRPC
const server = new grpc.Server();

server.addService(myService.service, {
  // Implemente os métodos do serviço aqui
  ObterClienteAll: (_: any, callback: any) => {
    callback(null, listaClientes);
  },
});

export { server };