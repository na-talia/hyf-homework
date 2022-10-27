// 1. Balance

let balance;

if (balance <= 0) {
  console.log("Please deposit some money!");
} else if (balance > 0 && balance < 1000) {
  console.log("Your nnalance is looking ok");
} else if (balance > 1000 && balance < 3000) {
  console.log("Your balance is looking good");
} else if (balance > 3000 && balance < 10000) {
  console.log("Yor balanse is fantastic");
} else {
  console.log("Your balance is AMAZING");
}
// 2. Ternary operator

let result;
const a = 10;
const b = 1;
result = a + b < 4 ? "Below" : "Over";

console.log(result); // Over

// 3. New Year

for (let i = 10; i >= 0; i--) {
  if (i === 10) {
    console.log("OMG it`s started");
  } else if (i === 0) {
    console.log("Happy new year!");
  } else {
    console.log(i);
  }
}

// 4. Count by sound

const friends = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

let count = 0;

for (i = 0; i < friends.length; i++) {
  if (friends[i].includes("a") || friends[i].includes("A")) {
    count++;
  } else {
    console.log(friends[i]);
  }
}
console.log(count);

// 5. Find Lola

for (i = 0; i < friends.length; i++) {
  if (friends[i] === "Lola") {
    console.log("Lola is here");
    break;
  } else {
    console.log(`This is ${friends[i]}`);
  }
}

// 6. Function 2 num

// if...else
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));

// Ternary operation

function min2(a, b) {
  return (number = a > b ? b : a);
}
console.log(min2(2, 5));
console.log(min2(3, -1));
console.log(min2(1, 1));

// 7. Circle area
function getCircleArea(radius) {
  return Math.PI * radius ** 2;
}

console.log(getCircleArea(6));

// 8. Temperature

function celciusToFahrenheit(celcius) {
  return (celcius * 9) / 5 + 32;
}

console.log(celciusToFahrenheit(10));
