const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

// time = distance / speed
function timeToArrive() {
  const timeTravel =
    travelInformation.destinationDistance / travelInformation.speed;
  const timeInHours = Math.floor(timeTravel);
  const timeInMinutes = Math.floor((timeTravel - timeInHours) * 60);
  console.log(timeTravel, timeInHours, timeInMinutes); // to see the value of variables
  return `You will arrive in ${timeInHours} hours and ${timeInMinutes} minutes`;
}

const travelTime = timeToArrive(travelInformation);

console.log(travelTime); // 8 hours and 38 minutes
