/* Desenvolva um banco de dados e relacione tabelas através de chaves estrangeiras ou nomes de colunas iguais. Siga as instruções:
crie uma base de dados; 
crie tabelas nessa base de dados;
em cada tabela, adicione atributos;
insira dados em cada tabela;
utilize os comandos Joins para realizar consultas nas tabelas. */


CREATE DATABASE casa_de_cambio;

USE casa_de_cambio;

CREATE TABLE TRANSFERENCIA (
  id_transferencia INT IDENTITY(1,1) PRIMARY KEY,
  monto_transferencia DECIMAL,
  id_cliente INT
);

CREATE TABLE cliente (
  id_cliente INT IDENTITY(1,1) PRIMARY KEY,
  nome_cliente VARCHAR(100),
  email VARCHAR(50)
);

INSERT INTO cliente (nome_cliente, email) VALUES
('Juan Pérez', 'juan@email.com'),
('María López', 'maria@email.com'),
('Pedro Rodríguez', 'pedro@email.com'),
('Ana Gómez', 'ana@email.com'),
('Luis Torres', 'luis@email.com');

INSERT INTO TRANSFERENCIA (monto_transferencia, id_cliente) VALUES
(100.50, 1),
(75.25, 2),
(200.00, 1),
(50.00, 3),
(150.75, 2);

SELECT * FROM cliente;
SELECT * FROM TRANSFERENCIA;

SELECT cliente.nome_cliente, TRANSFERENCIA.monto_transferencia FROM
cliente
LEFT JOIN TRANSFERENCIA ON cliente.id_cliente = TRANSFERENCIA.id_cliente;

SELECT TRANSFERENCIA.monto_transferencia, cliente.nome_cliente FROM
TRANSFERENCIA
RIGHT JOIN cliente ON TRANSFERENCIA.id_cliente = cliente.id_cliente;



