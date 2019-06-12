DROP DATABASE hello;
CREATE DATABASE hello;
USE hello;
CREATE TABLE employees ( 
	first_name varchar(50), 
	last_name varchar(50), 
	Department varchar(50), 
	salary int, 
	dob date
	);
INSERT INTO employees values (
	'Adam',
	'Fletcher',
	'Developer',
	200,
	STR_TO_DATE('01-01-2000', '%d-%m-%Y')
);

INSERT INTO employees values (
	'Abel',
	'Letcher',
	'Developer',
	201,
	STR_TO_DATE('01-01-2010', '%d-%m-%Y')
);
INSERT INTO employees values (
	'Adamantium',
	'Fletcherium',
	'Developerium',
	2001,
	STR_TO_DATE('01-01-2001', '%d-%m-%Y')
);
-- SELECT * FROM employees;

ALTER TABLE employees ADD address varchar(100);
-- ALTER TABLE employees DROP department;
-- TRUNCATE TABLE employees;

SELECT * FROM employees;

-- DELETE FROM employees;



