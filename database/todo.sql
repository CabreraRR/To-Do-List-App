DROP TABLE IF EXISTS to_do;

CREATE DATABASE to_do_list;

\c to_do_list

CREATE TABLE to_do (id INTEGER PRIMARY KEY,
  title VARCHAR(40),
  description VARCHAR(120),
  due_date DATE,
  completed BOOLEAN DEFAULT false
);

INSERT INTO to_do (title, description) VALUES
  ("drink tea", "make a tasty beverage in the kitchen and then drink it"),
  ("work out", "go outside and do exercises with the work-it group"),
  ("eat lunch", "take a break, eat some food.");
