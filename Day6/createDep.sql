USE hello;

CREATE TABLE departments(
	code varchar(10),
	name varchar(100),
	active boolean default true,
	created_date timestamp default  current_timestamp,
	last_modified_date timestamp default current_timestamp on update current_timestamp
);



INSERT INTO departments (code, name) VALUES (
	'HR',
	'Human Resources'
);

SELECT * FROM departments;