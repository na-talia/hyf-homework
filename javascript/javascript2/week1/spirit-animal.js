const myInput = document.body.appendChild(document.createElement("input"));
const myButton = document.body.appendChild(document.createElement("button"));
const myPara = document.body.appendChild(document.createElement("p"));
myButton.innerText = "Receive a spirit animal name";

const myButton2 = document.body.appendChild(document.createElement("button"));
myButton2.innerText = "New spirit animal";

const spiritAnimal = [
  "Happy capybara",
  "Suspicious butterfly",
  "Angry hedgehog",
  "Cowardly bunny",
  "Lazy cow",
  "Funny cat",
  "Crazy frog",
  "Friendly dog",
  "Fluffy snake",
  "Lucky penguin",
];

myButton.addEventListener("click", function () {
  const yourName = myInput.value;
  console.log(yourName);

  if (yourName === "") {
    return (myPara.innerText = "Enter your name");
  } else {
    let randomAnimal =
      spiritAnimal[Math.floor(Math.random() * spiritAnimal.length)];
    return (myPara.innerText = `${yourName}, your spirit animal is: ${randomAnimal} :)`);
  }
});

myButton2.addEventListener("click", function () {
  let randomAnimal2 =
    spiritAnimal[Math.floor(Math.random() * spiritAnimal.length)];
  return (myPara.innerText = `Your new spirit animal is: ${randomAnimal2} :)`);
});
