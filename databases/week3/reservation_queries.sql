USE meal_sharing;

-- Get all reservations

SELECT *
FROM reservation;

-- Add a new reservation

INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
 VALUES (2, 4, current_date(), '88 77 66 00', 'Nikolai', 'nikolai_i@gmail.com');

-- Get a reservation with any id, fx 1

SELECT *
FROM reservation
WHERE id = 3;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE reservation
SET number_of_guests = 3,
contact_phonenumber = '11 11 11 22'
WHERE id = 1;

-- Delete a reservation with any id, fx 1

DELETE FROM reservation
WHERE id = 1;