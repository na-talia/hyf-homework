const weatherInput = document.getElementById("weather-input");
const weatherButton = document.getElementById("input-button");

const loading = document.getElementById("loading");
loading.style.visibility = "hidden"; //loading icon is hidden
loading.style.width = "5%";

const myKey = "3cebafb43fa594f9f6c39fac18a52ac7";

weatherButton.addEventListener("click", showWeather);

function showWeather() {
  loading.style.visibility = "visible"; // loading icon is visible
  let city = weatherInput.value;

  if (city.length === 0) {
    city = localStorage.getItem("latestCity", city);
  }
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}`
  )
    .then((result) => result.json())
    .then((data) => {
      document.getElementById(
        "input-city"
      ).innerHTML = `<b>City:</b> ${data.name}, <div><b>Country: </b>${data.sys.country} </div>`;

      document.getElementById(
        "temperature"
      ).innerHTML = `<b>Temperature:</b> ${Math.round(
        data.main.temp - 273
      )} °C`; // convert Kelvin to Celsius

      document.getElementById(
        "weather-icon"
      ).src = `http://api.openweathermap.org/img/w/${data.weather[0].icon}.png`;

      document.getElementById(
        "wind-speed"
      ).innerHTML = `<b>Wind Speed:</b> ${Math.round(data.wind.speed)} M/S`;

      const cloudy = document.getElementById("cloudy");
      if (data.clouds.all > 20) {
        cloudy.innerHTML = "Cloudy";
      } else {
        cloudy.innerHTML = "Sunny";
      }

      document.getElementById(
        "sunrise-sunset"
      ).innerHTML = `<b>Sunrise at:</b> ${new Date(
        data.sys.sunrise * 1000
      ).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })}, <div><b>Sunset at: </b>${new Date(
        data.sys.sunset * 1000
      ).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })} </div>`;

      loading.style.visibility = "hidden"; // loading icon is hidden again
    });
}
