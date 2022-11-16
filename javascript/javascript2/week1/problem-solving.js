// 1. Find the shortest word
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

function findTheShortest() {
  let shortest = danishWords.reduce(function (previousValue, currentValue) {
    return previousValue.length <= currentValue.length
      ? previousValue
      : currentValue;
  });
  return shortest;
}
console.log(findTheShortest(danishWords));

//2. Find and count the Danish letters

const danishString = "Jeg har en blå bil";
const danishString2 = "Blå grød med røde bær";

const countString = { total: 0, å: 0, ø: 0, æ: 0 };

function count(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] in countString) {
      countString[string[i]]++;
      countString.total++;
    }
  }
  return countString;
}

console.log(count(danishString));
console.log(count(danishString2));
