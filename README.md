# MONGODB:
É um SGBD que utiliza o modelo de banco de dados NoSQL.
As informações são organizadas em documentos ou coleções de documentos.
O formato usado é chamado de BSON, que se assemelha muito ao JSON.
Os documentos consistem em pares chave-valor.
Como sistema gerenciador de banco de dados, atualmente ocupa a quinta posição em popularidade e uso, sendo o mais utilizado entre os sistemas de gerenciamento de bancos de dados documentais.

# PostgreSQL
O PostgreSQL é um sistema de gerenciamento de banco de dados relacional (SGBDR) altamente avançado e de código aberto. Ele é conhecido por sua robustez e confiabilidade, sendo amplamente utilizado em aplicações críticas em todo o mundo.

O PostgreSQL utiliza o modelo de banco de dados relacional, onde as informações são organizadas em tabelas com linhas e colunas. Isso permite um alto grau de coerência e integridade dos dados.

Uma das características notáveis do PostgreSQL é seu suporte a consultas complexas e recursos avançados, como procedimentos armazenados e gatilhos, que são essenciais para muitas aplicações empresariais.

Além disso, o PostgreSQL tem uma comunidade ativa e oferece suporte para várias extensões e plugins, tornando-o altamente flexível e personalizável de acordo com as necessidades de cada projeto.

No mundo dos sistemas de gerenciamento de banco de dados, o PostgreSQL é amplamente reconhecido e respeitado por sua confiabilidade e desempenho, o que o torna uma escolha popular entre desenvolvedores e empresas.

### Exemplo de uma entidade com atributo, simple, composto e multivalorado:

## Entidad: Libro

### Atributos Simples
- Título (String)
- Autor (String)
- Género (String)
- ISBN (Clave Primaria, String)

### Atributos Compuestos
- Capítulos (Lista de Capítulos)

### Atributos Multivalorados
- Palabras Clave (Lista de Palabras Clave)

### Relaciones
- Avaliaciones (1 a muchos)
- Autor (1 a 1)
- Editora (1 a 1)
