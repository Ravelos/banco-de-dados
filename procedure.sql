CREATE TABLE compras (
  id serial PRIMARY KEY,
  data_de_compra DATE,
  quantidade_comprada INT
);

INSERT INTO compras (data_de_compra, quantidade_comprada) VALUES
  ('2023-10-28', 10),
  ('2023-10-28', 5),
  ('2023-10-29', 8),
  ('2023-10-29', 7);
  
  SELECT * FROM compras;
  
CREATE OR REPLACE FUNCTION saber_quantidade(data_de_compra DATE, quantidade_comprada INT)
RETURNS INT AS $$
DECLARE
  total INT;
BEGIN
  SELECT SUM(quantidade_comprada) INTO total
  FROM compras
  WHERE data_de_compra = data_de_compra;

  RETURN total;
END;
$$ LANGUAGE plpgsql;

SELECT * FROM saber_quantidade('2023-10-28', 10);
