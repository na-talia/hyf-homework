const BASE_URL = "https://v6.exchangerate-api.com";
const MY_KEY = "a7b1d475b4a2c818963b7f85";

const currencies1 = {
  EUR: "Euro",
  USD: "United States Dollar",
  DKK: "Danish Krone",
  GBP: "British Pound",
  JPY: "Japanese yen",
  CNY: "Renminbi",
  AUD: "Australian Dollar",
  CAD: "Canadian Dollar",
  CHF: "Swiss franc",
  SEK: "Swedish krona",
};
const currencies2 = {
  DKK: "Danish Krone",
  EUR: "Euro",
  USD: "United States Dollar",
  DKK: "Danish Krone",
  GBP: "British Pound",
  JPY: "Japanese yen",
  CNY: "Renminbi",
  AUD: "Australian Dollar",
  CAD: "Canadian Dollar",
  CHF: "Swiss franc",
  SEK: "Swedish krona",
};

const firstCurrency = document.getElementById("first-currency");
const secondCurrency = document.getElementById("second-currency");

//Add <option> inside the <select> from Const currencies1 and currencies2
const getData = (data) => {
  return Object.entries(data).map(([country, currency]) => {
    console.log(country, currency);
    return `<option value="${country}">${country} - ${currency}</option>`;
  });
};

firstCurrency.innerHTML = getData(currencies1);
secondCurrency.innerHTML = getData(currencies2);

// Make the API request of the selected currency
async function getCurrencies() {
  const firstValue = firstCurrency.value;
  const secondValue = secondCurrency.value;
  const amount = document.getElementById("input-value").value;

  await fetch(`${BASE_URL}/v6/${MY_KEY}/latest/` + firstValue)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      showCurrency(data, firstValue, secondValue, amount);
    })
    .catch((error) => console.error("The error:", error.message));
}

//Multiply the amount that was entered into the input field by the second currency rate
const showCurrency = (data, firstValue, secondValue, amount) => {
  const calculatedCurrency = amount * data.conversion_rates[secondValue];
  const todaysRate = document.getElementById("exchange-rate");

  if (
    data.conversion_rates[firstValue] === data.conversion_rates[secondValue]
  ) {
    console.log(firstValue, secondValue);
    todaysRate.innerText = "Please select another currency";
  } else {
    todaysRate.innerHTML = `<b>Today\'s exchange rate: </b> ${data.conversion_rates[secondValue]}`;
    console.log(calculatedCurrency);

    document.getElementById(
      "exchange-result"
    ).innerText = `${amount} ${firstValue} = ${calculatedCurrency.toFixed(
      2
    )} ${secondValue}`;
  }
};

document
  .getElementById("convert-button")
  .addEventListener("click", getCurrencies);
