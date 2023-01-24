USE hyf_class2023;

/* Add a task with these attributes: 
title, description, created, updated, due_date, status_id, user_id*/

INSERT INTO task (title, description, created, updated, due_date, status_id, user_id) values ('Buy a new coat', 'Color: grey or black, size: S', '2023-01-18 20:41:45', '2023-01-19 14:02:06', '2023-03-01 22:00:00', 1, 7);

/* Change the title of a task */
UPDATE task SET title = 'Buy a new jacket'
WHERE id = 36;

/* Change a task due date */
UPDATE task SET due_date = '2023-03-31 21:59:59'
WHERE id = 36;

/* Change a task status */
UPDATE task SET status_id = 2
WHERE id = 36;

/* Mark a task as complete */
UPDATE task SET status_id = 3
WHERE id = 36;

/* Delete a task */
DELETE FROM task
WHERE id = 36;