const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
function getEventWeekday(daysToEvent) {
  let today = new Date();

  let eventDay = (today.getDay() + daysToEvent) % days.length;
  console.log(
    /* Here also could be used .toDateString() method, 
    but .toLocaleString() shows only the day of the week, this is exactly what I wanted */
    `Today is ${today.toLocaleString("en-US", {
      weekday: "long",
    })} and the event is in ${daysToEvent} days. Therefore the event will be held on ${
      days[eventDay]
    }`
  );
}
getEventWeekday(1);
getEventWeekday(5);
