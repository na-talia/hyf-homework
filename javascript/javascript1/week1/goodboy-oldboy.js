const dogYearOfBirth = 2020;
let dogYearFuture = 2035;
const humanYear = dogYearFuture - dogYearOfBirth;
const dogYear = humanYear * 7;
const shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears) {
  console.log(
    `Your dog will be ${humanYear} human years old in ${dogYearFuture}`
  );
} else {
  console.log(`Your dog will be ${dogYear} dog years old in ${dogYearFuture}`);
}
