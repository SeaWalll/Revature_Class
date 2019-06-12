USE hello;
DROP TABLE orders;
CREATE TABLE orders (
	order_id int,
	user_name varchar(100),
	product_name varchar(100),
	quantity int,
	status varchar(100) default 'ORDERED',
	ordered_date timestamp default current_timestamp,
	last_modified_date timestamp default current_timestamp
);

