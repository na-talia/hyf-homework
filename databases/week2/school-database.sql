/* Create a new database containing the following tables:
Class: with the columns: id, name, begins (date), ends (date)
Student: with the columns: id, name, email, phone, class_id (foreign key)*/

CREATE DATABASE school;
USE school;

CREATE TABLE `class` (
    `id` INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(30) NOT NULL,
    `begins` DATE NOT NULL,
    `ends` DATE NOT NULL
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;

CREATE TABLE `student` (
    `id` INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(30) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `phone` VARCHAR(20) NOT NULL,
    `class_id` INT(10) UNSIGNED NOT NULL,
    CONSTRAINT `fk_class_student` FOREIGN KEY (`class_id`)
        REFERENCES `class` (`id`)
        ON DELETE CASCADE ON UPDATE CASCADE
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;

/* Create an index on the name column of the student table. */
CREATE INDEX index_name
ON `student`(`name`);

/* Add a new column to the class table named status which can only have the following values: 
not-started, ongoing, finished (hint: enumerations).*/

ALTER TABLE `class`
ADD `status` ENUM('not-started', 'ongoing', 'finished') NOT NULL;
