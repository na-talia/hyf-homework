USE meal_sharing;

-- Get meals that has a price smaller than a specific price fx 90

SELECT meal.id, meal.title, meal.price
FROM meal
WHERE price < 500;

-- Get meals that still has available reservations

SELECT
  meal.title,
  meal.max_reservations,
  reservation.number_of_guests,
  (meal.max_reservations - reservation.number_of_guests) AS avialable_reservations
FROM meal
 INNER JOIN reservation ON meal.id = reservation.meal_id
WHERE meal.max_reservations > reservation.number_of_guests;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde

SELECT meal.id, meal.title
FROM meal
WHERE title like '%Spicy%';

-- Get meals that has been created between two dates

SELECT *
FROM meal
WHERE created_date BETWEEN '2023-02-14'
AND '2023-02-19';

-- Get only specific number of meals fx return only 5 meals

SELECT *
FROM meal
WHERE max_reservations < 4
LIMIT 3;

-- Get the meals that have good reviews

SELECT meal.title, review.stars
FROM meal
INNER JOIN review
ON meal.id = review.meal_id
WHERE review.stars >= 4;

-- Get reservations for a specific meal sorted by created_date

SELECT *
FROM reservation
INNER JOIN meal 
ON reservation.meal_id = meal.id
WHERE meal.title = '%Spicy%'
ORDER BY meal.created_date ASC;

-- Sort all meals by average number of stars in the reviews

SELECT meal.title,
  ROUND(AVG(review.stars)) as Average_stars
FROM meal
  JOIN review ON meal.id = review.meal_id
GROUP BY meal_id
ORDER BY Average_stars DESC;