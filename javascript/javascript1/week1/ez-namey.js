const firstWords = [
  "Easy",
  "Nice",
  "Cool",
  "Good",
  "Creative",
  "Fresh",
  "Bright",
  "Green",
  "New",
  "Double",
];
const secondWords = [
  "Brain",
  "Start",
  "Freedom",
  "Light",
  "Future",
  "Now",
  "Tech",
  "Book",
  "Cube",
  "Consult",
];

const randomNumber = Math.floor(Math.random() * 10);
let startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];

console.log(
  `The startup ${startupName} contains ${startupName.length} characters.`
);
