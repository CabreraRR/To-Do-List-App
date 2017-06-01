DROP TABLE IF EXISTS to_do;

CREATE DATABASE to_do_list;

\c to_do_list

CREATE TABLE to_do (id SERIAL PRIMARY KEY ,
  title VARCHAR(40),
  description VARCHAR(120),
  due_date DATE,
  completed BOOLEAN DEFAULT false
);


  