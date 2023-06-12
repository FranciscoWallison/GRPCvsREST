

## RPC - RPC - Remote Procedure Call ( Chamada Remota)
````

Online Shop -  Serviço de pagamento

Cliente         Service
(Online Shop)   (Serviço de Pagamento)


````

## O arquivo com a extensão ```.proto``` é o de protocolo

````
Tem como objetivo de entregar os métodos para os clientes 
````

## Estrutura do arquivo ```.proto```

````
// Versão do arquivo proton
syntax = "proto3";

package mypackage;

// Defina suas mensagens e serviços aqui
message MyRequest {
  string name = 1;
}

message MyResponse {
  string message = 1;
}

service MyService {
  rpc MyMethod(MyRequest) returns (MyResponse);
}
````
