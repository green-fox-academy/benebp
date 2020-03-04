USE master;

DROP DATABASE IF EXISTS todo;

CREATE DATABASE todo;

USE todo;

DROP TABLE IF EXISTS todos;

CREATE TABLE todos (
    id INT NOT NULL AUTO_INCREMENT,
    todo VARCHAR(40) NOT NULL,
    status INT NOT NULL DEFAULT '0',
    PRIMARY KEY (id)
);