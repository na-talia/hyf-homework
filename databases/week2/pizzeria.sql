CREATE DATABASE if not exists pizzeria;
USE pizzeria;

CREATE TABLE product (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(50) NOT NULL,
    price DECIMAL NOT NULL,
    `description` VARCHAR(50)
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;

CREATE TABLE customer (
    customer_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    email VARCHAR(50) NOT NULL,
    city VARCHAR(20) NOT NULL,
    street VARCHAR(30) NOT NULL,
    house VARCHAR(10) NOT NULL,
    apartment VARCHAR(10),
    post_number INT(4) NOT NULL
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;


CREATE TABLE `order` (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT NOT NULL,
    customer_id INT NOT NULL,
    order_time DATETIME NOT NULL,
    quantity INT NOT NULL,
    CONSTRAINT `fk_product_id` FOREIGN KEY (product_id)
        REFERENCES PRODUCT (product_id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fk_customer_id` FOREIGN KEY (customer_id)
        REFERENCES customer (customer_id)
        ON DELETE CASCADE ON UPDATE CASCADE
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;

CREATE TABLE payment (
    payment_id INT PRIMARY KEY AUTO_INCREMENT,
    payment_method VARCHAR(5) UNIQUE NOT NULL,
    total_price INT NOT NULL
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;

CREATE TABLE delivery (
    delivery_id INT AUTO_INCREMENT,
    order_id INT UNIQUE NOT NULL,
    pickup_time DATETIME,
    courier_id INT UNIQUE NOT NULL,
    payment_method INT NOT NULL,
    PRIMARY KEY (delivery_id , courier_id),
    CONSTRAINT `fk_order_id` FOREIGN KEY (order_id)
        REFERENCES `order` (order_id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fk_payment_id` FOREIGN KEY (payment_method)
        REFERENCES payment (payment_id)
        ON DELETE CASCADE ON UPDATE CASCADE
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;


CREATE TABLE courier (
    courier_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    delivery_method VARCHAR(5) NOT NULL,
    CONSTRAINT `fk_courier_id` FOREIGN KEY (courier_id)
        REFERENCES delivery (courier_id)
        ON DELETE CASCADE ON UPDATE CASCADE
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;