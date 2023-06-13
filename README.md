# GRPC vs REST

````
Até agora, o REST tem sido a forma mais popular de estruturar a comunicação entre APIs usando o protocolo HTTP.
Ele é amplamente usado em aplicativos da web e em sistemas baseados em microserviços.
No entanto, é importante entender que existem alternativas além do REST.
Dependendo do contexto e das necessidades específicas, o gRPC pode ser uma escolha valiosa e importante.
````
## API REST (Representational State Transfer)
````
O REST é o estilo de arquitetura mais amplamente adotado para a construção de APIs,
especialmente em aplicativos web e infraestruturas baseadas em microserviços.
Ele estabelece um conjunto de diretrizes que ajudam a garantir a interoperabilidade entre
diferentes microserviços e aplicativos baseados na web.
As APIs baseadas em REST são excelentes para modelar o seu domínio, ou seja, as diferentes
entidades ou recursos da sua aplicação. Elas fornecem operações CRUD (create, read, update,
delete) que permitem criar, ler, atualizar e excluir dados de forma consistente e padronizada
em toda a sua API.
````

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
