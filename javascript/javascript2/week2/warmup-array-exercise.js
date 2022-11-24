// 1. Doubling of number
const numbers = [1, 2, 3, 4];

const doubleOddNum = numbers
  .filter((odd) => odd % 2 !== 0)
  .map((double) => double * 2);
console.log(`The doubled numbers are ${doubleOddNum}`);

// 2. Working with movies
const movies = [
  { title: "'71", year: 2014, rating: 7.2, votes: 41702, running_times: 5940 },
  {
    title: "'A' gai wak",
    year: 1983,
    rating: 7.4,
    votes: 11942,
    running_times: 6300,
  },
  {
    title: "'Breaker' Morant",
    year: 1980,
    rating: 7.9,
    votes: 10702,
    running_times: 6420,
  },
  {
    title: "'Crocodile' Dundee II",
    year: 1988,
    rating: 5.5,
    votes: 47180,
    running_times: 6480,
  },
  {
    title: "(500) Days of Summer",
    year: 2009,
    rating: 7.7,
    votes: 412368,
    running_times: 5700,
  },
  {
    title: "*batteries not included",
    year: 1987,
    rating: 6.6,
    votes: 25636,
    running_times: 6360,
  },
  {
    title: "...E tu vivrai nel terrore! L'aldilà",
    year: 1981,
    rating: 6.9,
    votes: 16484,
    running_times: 5220,
  },
  {
    title: "...and justice for all.",
    year: 1979,
    rating: 7.4,
    votes: 25408,
    running_times: 7140,
  },
  { title: "10", year: 1979, rating: 6, votes: 13152, running_times: 7320 },
  {
    title: "10 Cloverfield Lane",
    year: 2016,
    rating: 7.2,
    votes: 216151,
    running_times: 6240,
  },
  {
    title: "10 Items or Less",
    year: 2006,
    rating: 6.7,
    votes: 13342,
    running_times: 4920,
  },
  {
    title: "10 hings I Hate About You",
    year: 1999,
    rating: 7.2,
    votes: 247070,
    running_times: 5820,
  },
  {
    title: "10 Years",
    year: 2011,
    rating: 6.1,
    votes: 20790,
    running_times: 6000,
  },
  {
    title: "10,000 BC",
    year: 2008,
    rating: 5.1,
    votes: 114750,
    running_times: 6540,
  },
  {
    title: "100 Feet",
    year: 2008,
    rating: 5.5,
    votes: 10979,
    running_times: 6240,
  },
  {
    title: "100 Girls",
    year: 2000,
    rating: 5.9,
    votes: 19232,
    running_times: 5640,
  },
  {
    title: "101 Dalmatians",
    year: 1996,
    rating: 5.7,
    votes: 83245,
    running_times: 6180,
  },
  {
    title: "Private Benjamin",
    year: 1980,
    rating: 6.1,
    votes: 19888,
    running_times: 6540,
  },
  {
    title: "All About the Benjamins",
    year: 2002,
    rating: 5.8,
    votes: 10378,
    running_times: 5700,
  },
  {
    title: "The Curious Case of Benjamin Button",
    year: 2008,
    rating: 7.8,
    votes: 501739,
    running_times: 9960,
  },
  {
    title: "My Stepmother Is an Alien",
    year: 1988,
    rating: 5.2,
    votes: 22451,
    running_times: 6300,
  },
  {
    title: "Monsters vs. Aliens",
    year: 2009,
    rating: 6.5,
    votes: 125293,
    running_times: 5640,
  },
  {
    title: "Cowboys & Aliens",
    year: 2011,
    rating: 6,
    votes: 184726,
    running_times: 8100,
  },
  {
    title: "Alien³",
    year: 1992,
    rating: 6.4,
    votes: 234564,
    running_times: 8700,
  },
  {
    title: "4: Rise of the Silver Surfer",
    year: 2007,
    rating: 5.6,
    votes: 225698,
    running_times: 5520,
  },
  {
    title: "Soul Surfer",
    year: 2011,
    rating: 7.1,
    votes: 38676,
    running_times: 6720,
  },
];
console.log(movies.length);
// Movies with a short title

const shortTitle = movies
  .filter((movie) => movie.title.length <= 8)
  .map((movie) => movie.title);
console.log("Movies with a short title:", shortTitle);

// Movies with a long title
const longTitle = movies
  .filter((movie) => movie.title.length > 15)
  .map((movie) => movie.title);
console.log("Movies with a long title:", longTitle);

// Movies between 1980 - 1989
const oldMovies = movies
  .filter((movie) => movie.year >= 1980 && movie.year <= 1989)
  .map((movie) => movie.title);
console.log(
  `There are ${oldMovies.length} movies between 1980 - 1989 years:`,
  oldMovies
);

// Extra key called Tag based on the rating

const ratingMovies = movies.map((movie) => {
  return movie.rating >= 7
    ? { movie, tag: "Good" }
    : movie.rating >= 4 && movie.rating < 7
    ? { movie, tag: "Average" }
    : movie.rating < 4
    ? { movie, tag: "Bad" }
    : movie;
});
console.log("Array wih tags", ratingMovies);

// Using chaining

const highRating = movies
  .filter((movie) => movie.rating > 6)
  .map((movie) => movie.rating);
console.log("Rating of the movies:", highRating);

// Count the total number of movies

const namesOfMovies = movies
  .map((movie) => movie.title.toLowerCase())
  .filter((movie) => {
    if (
      movie.includes("surfer") ||
      movie.includes("alien") ||
      movie.includes("benjamin")
    ) {
      return movie;
    }
  });
console.log(`There are ${namesOfMovies.length} movies:`, namesOfMovies);

// Duplicated title (this code works, but only with numbers)

const duplicatedTitle = movies.filter((movie) => {
  const titleToArray = movie.title.toLocaleLowerCase().split(" ");

  for (let i = 0; i < titleToArray.length; i++) {
    if (titleToArray[i].includes(i)) {
      return titleToArray;
    }
  }
});
console.log(duplicatedTitle);

// Calculating the average rating (Optional)
const ratingOnly = movies.map((movie) => movie.rating);
console.log(ratingOnly);

const averageRating =
  ratingOnly.reduce((firstValue, secondValue) => firstValue + secondValue) /
  ratingOnly.length;

console.log(
  `The average rating of all the ${
    movies.length
  } movies is: ${averageRating.toFixed(2)}`
);

//The total number of Good, Average and Bad movies (Optional)

let goodMovies = 0;
let averageMovies = 0;
let badMovies = 0;

ratingMovies.reduce((i, movie) => {
  if (movie.tag === "Good") {
    return goodMovies++;
  } else if (movie.tag === "Average") {
    return averageMovies++;
  } else {
    return badMovies++;
  }
});

console.log(
  `Good movies: ${goodMovies}, average movies: ${averageMovies}, bad movies: ${badMovies}`
);
