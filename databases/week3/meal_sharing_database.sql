CREATE DATABASE IF NOT EXISTS meal_sharing;

USE meal_sharing;

CREATE TABLE meal (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    `description` TEXT,
    location VARCHAR(50) NOT NULL,
    `when` DATETIME NOT NULL,
    max_reservations INT UNSIGNED NOT NULL,
    price DECIMAL(6,2) NOT NULL,
    created_date DATE NOT NULL
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;

CREATE TABLE reservation (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    number_of_guests INT(3) UNSIGNED NOT NULL,
    meal_id INT(10) UNSIGNED NOT NULL,
    created_date DATE NOT NULL,
    contact_phonenumber VARCHAR(15) NOT NULL,
    contact_name VARCHAR(50) NOT NULL,
    contact_email VARCHAR(50) NOT NULL,
    CONSTRAINT `fk_reservation` FOREIGN KEY (meal_id)
        REFERENCES meal (id)
        ON DELETE CASCADE ON UPDATE CASCADE
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;

CREATE TABLE review (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(70) NOT NULL,
    `description` TEXT,
    meal_id INT(10) UNSIGNED NOT NULL,
    stars INT(1) UNSIGNED NOT NULL,
    created_date DATE NOT NULL,
    CONSTRAINT `fk_review` FOREIGN KEY (meal_id)
        REFERENCES meal (id)
        ON DELETE CASCADE ON UPDATE CASCADE
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;

-- Add a meal

INSERT INTO meal (title, `description`, location, `when`, max_reservations, price, created_date)
VALUES ('Truffle Pizza', 'Sweet potato, chili fraiche, parmesan, truffle tapenade and fresh sage', 'Snaregade 4, København, DK 1205', '2023-02-14 19:00:00', 2, 600, '2023-01-14 19:06:34' );
INSERT INTO meal (title, `description`, location, `when`, max_reservations, price, created_date)
 VALUES ('Special Pizza', 'Fresh mozzarella, sliced potato, goat cheese, fresh rosemary and truffle oil', 'Magstræde 16, 1204 København K', '2023-02-25 20:00:00', 5, 1550, '2023-01-25 10:04:00');
INSERT INTO meal (title, `description`, location, `when`, max_reservations, price, created_date)
 VALUES ('Margherita Pizza', 'Tomato sauce, cherry tomatoes, mozzarella and basil oil', 'Snaregade 4, København, DK 1205', '2023-02-20 19:30:00', 4, 460, current_date());
INSERT INTO meal (title, `description`, location, `when`, max_reservations, price, created_date)
 VALUES ('Spicy Salami Pizza', 'Tomato sauce, fresh mozzarella and spicy Italian chili-paprika sausage', 'Magstræde 16, 1204 København K', '2023-02-18 18:00:00', 2, 380, '2023-01-18 18:11:03');
INSERT INTO meal (title, `description`, location, `when`, max_reservations, price, created_date)
 VALUES ('Spicy Beef Pizza', 'Tomato sauce, fresh mozzarella, slow-braised beef, ricotta, peppers, chilli', 'Sankt Peders Stræde 34, København, DK 1453', '2023-02-19 17:00:00', 3, 300, '2023-01-19 18:04:00');

-- Add a reservation

INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (2, 2, '2023-01-20 17:35:10', '11 11 11 11', 'Jens', 'jens_m@gmail.com');
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
 VALUES (3, 2, '2023-01-20 19:42:11', '22 22 22 22', 'Kate', 'k.kate@gmail.com');
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
 VALUES (3, 3, '2023-01-19 13:20:41', '44 44 55 55', 'Natalia', 'nt_sh@gmail.com');
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
 VALUES (1, 1, current_date(), '44 44 55 55', 'Natalia', 'nt_sh@gmail.com');


-- Add a review

INSERT INTO review (title, `description`, meal_id, stars, created_date)
VALUES ('Nice place and service', 'The food is delicious and the service is very good', 1, 5, current_date());
INSERT INTO review (title, `description`, meal_id, stars, created_date)
 VALUES ('Great place', 'Great place! Got this place recommended by a local to Copenhagen, and I don’t regret trying it out. Very nice pizzas, cozy place', 2, 5, '2023-01-19 13:08:41');
INSERT INTO review (title, `description`, meal_id, stars, created_date)
 VALUES ('Great pizza, bad service', 'Waited 15min to get service, then we waited about 40min extra for pizza. All tables around us was waiting a long time too. When the pizzas finally arrived it was fairly good, but not 40min worth a wait', 5, 2, '2023-01-21 17:08:51');
INSERT INTO review (title, `description`, meal_id, stars, created_date)
 VALUES ('Three pizzas...', 'We ordered three pizzas. Two of them were warm and the third cold. We asked if the "Spicy Beef" was spicy for children. They said no...I could only eat it, it was very spicy', 5, 4, '2023-01-24 12:58:51');