// 1.
function loaded() {
  setTimeout(() => {
    console.log("Called after 2.5 seconds");
  }, 2500);
}
loaded();

// 2
function logStringDelay(delay, stringToLog) {
  setTimeout(() => {
    console.log(stringToLog);
  }, delay * 1000);
}
logStringDelay(5, "This string logged after 5 seconds");
logStringDelay(3, "This string logged after 3 seconds");

// 3.
const delayButton = document.getElementById("delay-btn");

delayButton.addEventListener("click", () =>
  logStringDelay(5, "Called after 5 seconds")
);

//4.
function earthLogger() {
  console.log("Earth");
}
function saturnLogger() {
  console.log("Saturn");
}

function planetLogFunction(planet) {
  planet();
}

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

//5. + 6.
function logLocation() {
  const yourLocation = document.getElementById("your-location");
  const findOnMap = document.getElementById("find-on-map");

  findOnMap.textContent = "";

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    yourLocation.textContent = "";
    findOnMap.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    findOnMap.textContent = `Your latitude: ${latitude} °, your longitude: ${longitude} °`;
  }
  function error() {
    yourLocation.textContent = "Unable to retrieve your location";
  }
  if (!navigator.geolocation) {
    yourLocation.textContent = "Geolocation is not supported by your browser";
  } else {
    yourLocation.textContent = "Locating…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
}
document.getElementById("location-btn").addEventListener("click", logLocation);

// 7.
function runAfterDelay(delay, callback) {
  setTimeout(() => {
    callback();
  }, delay * 1000);
}

runAfterDelay(4, () => {
  console.log("Should be logged after 4 seconds");
});

runAfterDelay(10, () => {
  console.log("Should be logged after 10 seconds");
});

// 8.
window.addEventListener("dblclick", () => console.log("Double click!"));

// 9.
function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  shouldTellFunnyJoke ? logFunnyJoke() : logBadJoke();
}

function logFunnyJoke() {
  console.log("I am funny");
}
function logBadJoke() {
  console.log("I am NOT funny");
}
jokeCreator(true, logFunnyJoke, logBadJoke);
jokeCreator(false, logFunnyJoke, logBadJoke);
