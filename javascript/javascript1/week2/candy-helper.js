const boughtCandyPrices = [];
function addCandy(candyType, weight) {
  let candyPrice = 0;
  if (candyType === "sweet") {
    candyPrice = weight * 0.5;
  } else if (candyType === "chocolate") {
    candyPrice = weight * 0.7;
  } else if (candyType === "toffee") {
    candyPrice = weight * 1.1;
  } else if (candyType === "chewing-gum") {
    candyPrice = weight * 0.03;
  } else {
    console.log("Please choose a candy");
    return boughtCandyPrices;
  }
  boughtCandyPrices.push(candyPrice);
  console.log(
    `You bought ${weight} grams of ${candyType} candy and it costs ${candyPrice}`
  );
  return boughtCandyPrices;
}
addCandy("sweet", 20);
addCandy("chocolate", 1);
addCandy("toffee", 40);
addCandy();
addCandy("chewing-gum", 100);
console.log(boughtCandyPrices);

// Can I buy more?
const amountToSpend = (Math.random() * 100).toFixed(2); // .toFixed(2) shows only 2 digits after the decimal point

console.log(`You can spend ${amountToSpend}`);

function canBuyMoreCandy() {
  let candySum = 0;
  for (i = 0; i < boughtCandyPrices.length; i++) {
    candySum += boughtCandyPrices[i];
  }

  if (candySum < amountToSpend) {
    let restSum = amountToSpend - candySum; // shows how much money is left and can be spent
    console.log(
      `You can buy more, so please do! You still have ${restSum} to spend`
    );
  } else {
    console.log("Enough candy for you!");
  }

  console.log(candySum);
}

canBuyMoreCandy();
