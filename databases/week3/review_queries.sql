USE meal_sharing;

-- Get all reviews

SELECT review.id, review.title, review.`description`
FROM review;

-- Add a new review

INSERT INTO review (title, `description`, meal_id, stars, created_date)
 VALUES ('OK', 'If you are just looking for pizza then this place is ok. The pizzas are nothing special. It is just pizza', 4, 4, current_date());

-- Get a review with any id, fx 1

SELECT *
FROM review
WHERE id = 5;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE review
SET title = 'Good',
	meal_id = 3
WHERE id = 5;

-- Delete a review with any id, fx 1

DELETE FROM review
WHERE id = 5;