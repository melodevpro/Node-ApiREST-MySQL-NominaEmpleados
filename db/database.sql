
CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE empleados (
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(45) DEFAULT NULL,
    apellido VARCHAR(45) DEFAULT NULL,
    email VARCHAR(45) DEFAULT NULL,
    telefono VARCHAR(45) DEFAULT NULL,
    salario INT(11) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE empleados;

INSERT INTO empleados VALUES
    (1, 'Luis', 'Guzman', 'luis@example.com', '123456789', 3000000);
    (2, 'Maria', 'Alerta', 'maria@example.com', '123456789', 4500000);
    (3, 'Pedro', 'Cordoba', 'pedro@example.com', '123456789', 2800000);
    (4, 'Camila', 'Arteaga', 'camila@example.com', '123456789', 5000000);
    (5, 'Arturo', 'Bello', 'arturo@example.com', '123456789', 3200000);
    (6, 'Luisa', 'Andrade', 'luisa@example.com', '123456789', 4000000);
    (7, 'David', 'Fuller', 'david@example.com', '123456789', 6500000);
    (8, 'Alvaro', 'Murillo', 'alvaro@example.com', '123456789', 7300000);
    (9, 'Angela', 'Munoz', 'angela@example.com', '123456789', 1800000);
