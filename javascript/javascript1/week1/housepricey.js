/* Peter and his house */

const peterHouseWide = 8;
const peterHouseDeep = 10;
const peterHouseHigh = 10;
const peterGardenSize = 100;
const firstHousePrice = 2500000;

let peterVolumeInMeters = peterHouseWide * peterHouseDeep * peterHouseHigh;
console.log(peterVolumeInMeters);

let peterHousePrice = peterVolumeInMeters * 2.5 * 1000 + peterGardenSize * 300;
console.log(peterHousePrice);

if (peterHousePrice > firstHousePrice) {
  console.log(`Peter paid ${peterHousePrice} and it is too much!`);
} else if (peterHousePrice === firstHousePrice) {
  console.log(`The price matches the market value of the house`);
} else {
  console.log(`Peter paid ${peterHousePrice} and it is a good price!`);
}

/* Julia and her house */

const juliaHouseWide = 5;
const juliaHouseDeep = 11;
const juliaHouseHigh = 8;
const juliaGardenSize = 70;
const secondHousePrice = 1000000;

let juliaVolumeInMeters = juliaHouseWide * juliaHouseDeep * juliaHouseHigh;
console.log(juliaVolumeInMeters);

let juliaHousePrice = juliaVolumeInMeters * 2.5 * 1000 + juliaGardenSize * 300;
console.log(juliaHousePrice);

if (juliaHousePrice > secondHousePrice) {
  console.log(`Julia paid ${juliaHousePrice} and it is too much!`);
} else if (juliaHousePrice === secondHousePrice) {
  console.log(`The price matches the market value of the house`);
} else {
  console.log(`Julia paid ${juliaHousePrice} and it is a good price!`);
}
