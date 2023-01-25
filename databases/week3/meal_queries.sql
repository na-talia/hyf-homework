USE meal_sharing;

-- Get all meals

SELECT meal.title AS 'All meals'
FROM meal;

-- Add a new meal

INSERT INTO meal (title, `description`, location, `when`, max_reservations, price, created_date)
 VALUES ('Prosciutto Pizza', 'Tomato sauce, fresh mozzarella, mascarpone, Italian cotto ham and portobello mushrooms', 'Rysensteensgade 16, København, DK 1564', '2023-02-23 18:30:00', 5, 1200, current_date());

-- Get a meal with any id, fx 1

SELECT * FROM meal
WHERE id = 3;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE meal 
SET 
    title = 'Potato and Truffle Pizza',
    price = 500
WHERE id = 1;

-- Delete a meal with any id, fx 1

DELETE FROM meal 
WHERE id = 1;