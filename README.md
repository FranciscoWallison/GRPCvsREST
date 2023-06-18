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

## gRPC (Google Remote Procedure Call)
````
O gRPC é um serviço de alto desempenho baseado em RPC (Remote Procedure Call),
que simplifica o desenvolvimento de APIs. Com o gRPC, você só precisa definir as requisições e respostas,
enquanto ele cuida do restante. Ele é uma estrutura moderna, rápida e eficiente,
construída sobre o protocolo HTTP/2. Isso proporciona baixa latência, suporte a streaming,
compatibilidade com várias linguagens de programação para clientes e servidores
(oficialmente, há suporte para 12 linguagens), e facilita a inclusão de recursos como autenticação,
balanceamento de carga, registro de logs e monitoramento.

A arquitetura do gRPC utiliza o formato de mensagem protobuf (Protocol Buffers),
que é altamente compacto e eficiente para serializar dados estruturados.

As APIs baseadas em RPC são excelentes para ações, ou seja, procedimentos ou comandos específicos.
Em certos contextos, o gRPC pode ser uma alternativa mais eficiente do que uma API REST.

O gRPC adere amplamente às semânticas do HTTP sobre o protocolo HTTP/2,
o que permite utilizar streaming full-duplex para comunicação entre diferentes sistemas através de uma conexão de rede
````

## RPC - RPC - Remote Procedure Call ( Chamada Remota)
````
Online Shop -  Serviço de pagamento

Cliente         Service
(Online Shop)   (Serviço de Pagamento)

````

##  HTTP/2 em relação ao HTTP/1.1 incluem
````
Desempenho melhorado: O HTTP/2 utiliza a multiplexação,
permitindo que várias solicitações sejam enviadas simultaneamente em uma única conexão TCP.
Isso reduz a latência e melhora o desempenho geral,
especialmente em redes com alta latência.

Compressão de cabeçalhos: O HTTP/2 introduz a compressão de cabeçalhos,
o que reduz a quantidade de dados transmitidos e economiza largura de banda.

Priorização de requisições: O HTTP/2 permite que as requisições sejam priorizadas,
o que garante que recursos importantes sejam carregados primeiro,
melhorando a experiência do usuário.

Server Push: O HTTP/2 permite que o servidor envie recursos para o cliente antes mesmo de serem solicitados,
melhorando a eficiência ao evitar atrasos na solicitação desses recursos.

Protocolo binário: O HTTP/2 utiliza um formato de mensagem binária em vez de texto legível,
o que torna a comunicação mais eficiente e reduz o overhead de análise e serialização de mensagens.

Maior segurança: O uso do HTTP/2 frequentemente implica o uso do HTTPS,
adicionando uma camada de criptografia para proteger a privacidade e a integridade dos dados transmitidos.

````

## Casos que podemos usar
````
Ideal para microsserviços
Mobile Browsers
Geração das bibliotecas de forma automática
Streaming bidirecional utilizando HTTP/2
````

## REST
````
Texto / JSON
Unidirecional
Alta latência
Sem contrato (maior chance de erros)
Sem suporte a streaming (Resquest / Response)
Design pré-definido
Bibliotecas de terceiros
````

## gRPC
````
Protocol Buffers
Bidirecional e Assíncrono
Baixa latência
Contrato definido (.proto)
Suporte a streming
Desing é livre
Geração de códigos
````


## O arquivo com a extensão ```.proto``` é o de protocolo

````
Tem como objetivo de entregar os métodos para os clientes 
````

## Estrutura do arquivo ```.proto```
