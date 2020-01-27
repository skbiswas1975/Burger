
DROP DATABASE if exists eat_burger_db;
CREATE DATABASE eat_burger_db;

USE eat_burger_db;

CREATE TABLE burger (
  id int(11) NOT NULL AUTO_INCREMENT,
  burger_name varchar(100) NOT NULL,
  devoured boolean NOT NULL DEFAULT FALSE,
  ddate TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);