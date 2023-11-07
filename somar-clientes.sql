/*
Uma loja tem um banco de dados que contém todo o controle de vendas de produtos e de cadastro de clientes.
Pensando nisso, crie uma função para somar todos os clientes que foram cadastrados na loja durante um dia.
*/

 CREATE or REPLACE FUNCTION somar_clientes_por_data(data DATE)
   RETURNS INTEGER AS $$
   DECLARE
   total_clientes INTEGER;
   BEGIN
       SELECT COUNT(*)
       INTO total_clientes
       FROM clientes
       WHERE DATE(data_cadastro) = data;
       RETURN total_clientes;
   END;
$$ LANGUAGE plpgsql;
