// BIBLIOTECAS
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

// ARQUIVO PROTO
const dir_file_proton = './grpcProto/cliente.proto';

// INICIANDO O BANCO
import { listaClientes } from '../../db/fakeDB'; 

// Carregando o arquivo de definição do protobuf
const packageDefinition = protoLoader.loadSync(dir_file_proton);
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const ClienteService = protoDescriptor.ClienteService; 

// Implementando o serviço gRPC
const server = new grpc.Server();

server.addService(ClienteService.service, {

  ObterCliente: (call: any, callback: any)  => {
    const id = call.request.id;
    // simulando consulta do banco Find(id)
    const cliente = listaClientes.clientes.find((cliente) => cliente.id === id);
    // resposta
    callback(null, cliente);
  },

  ObterClienteAll: (_: any, callback: any) => {
    callback(null, listaClientes);
  },

  AtualizarCliente: (call: any, callback: any)  => {
    const cliente = call.request;

    const mensagem = `Cliente ${cliente.nome} foi atualizado com sucesso!`;

    callback(null, {mensagem});
  },

});

export { server };