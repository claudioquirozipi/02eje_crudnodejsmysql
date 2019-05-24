-- creando la base de datos

CREATE DATABASE crudnodejsmysql;

--utilizando la base de datos

use crudnodejsmysql;

--Creando una tabla de compradores
CREATE TABLE  customer (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
);

--mostrar tablas

SHOW TABLES;

--Describir tablas

describe customer;