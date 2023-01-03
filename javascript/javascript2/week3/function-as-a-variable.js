//1.
function firstFunction() {
  console.log("First function");
}
function secondFunction() {
  console.log("Second function");
}

const myFunctions = [
  firstFunction,
  secondFunction,
  function () {
    console.log("Anonymous function");
  },
];

myFunctions.forEach((i) => i());

//2.
const constFunction = () => {
  console.log("Const function");
};
function normalFunction() {
  console.log("Normal function");
}

constFunction();
normalFunction();

//3.
const objectFunction = {
  animal: "Capybara",
  weight: 50,
  sound: () => console.log("Ffuit-Ffuit"),
};

objectFunction.sound();
