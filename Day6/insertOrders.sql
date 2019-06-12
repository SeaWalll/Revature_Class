USE hello;

-- SELECT * FROM orders;

INSERT INTO orders (
	order_id, user_name, product_name, quantity
) VALUES (
	1,
	'Wes',
	'iPhone',
	1
);

UPDATE orders SET STATUS = 'DELIVERED' WHERE order_id = 1;
-- avoid updating partial fields.

UPDATE orders SET STATUS = 'DELIVERED', last_modified_date = current_timestamp() WHERE order_id = 1;

-- SELECT * FROM orders;
