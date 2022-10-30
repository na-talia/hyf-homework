// Using if...else

function chooseTheClothes(temperature) {
  if (temperature <= 0) {
    return "You should wear a jacket, hat and gloves";
  } else if (temperature > 0 && temperature <= 10) {
    return "You should wear a coat";
  } else if (temperature > 10 && temperature <= 20) {
    return "You should wear a jacket";
  } else {
    return "You should wear a t-shirt";
  }
}
const clothesToWear = chooseTheClothes(15);
console.log(clothesToWear);

// Using Conditional (ternary) operator

function pickTheClothes(temperature) {
  return temperature <= 0
    ? "You should wear a jacket, hat and gloves"
    : temperature > 0 && temperature <= 10
    ? "You should wear a coat"
    : temperature > 10 && temperature <= 20
    ? "You should wear a jacket"
    : "You should wear a t-shirt";
}

const clothesToWear2 = pickTheClothes(-5);
console.log(clothesToWear2);

// Using switch

let temperature = 30;
switch (true) {
  case temperature < 0:
    console.log("You should wear a jacket, hat and gloves");
    break;
  case temperature < 10:
    console.log("You should wear a coat");
    break;
  case temperature < 20:
    console.log("You should wear a jacket");
    break;
  default:
    console.log("You should wear a t-shirt");
}
