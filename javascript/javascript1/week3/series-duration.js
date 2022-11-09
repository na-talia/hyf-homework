const seriesDurations = [
  {
    title: "South Park",
    days: 7,
    hours: 20,
    minutes: 30,
  },
  {
    title: "Revenge",
    days: 5,
    hours: 16,
    minutes: 47,
  },
  {
    title: "Early Swallows",
    days: 3,
    hours: 11,
    minutes: 40,
  },
];

const lifeSpan = 80 * 365 * 24 * 60;
console.log(lifeSpan); // 80 years = 42048000 minutes
let serieSpan = 0;

function logOutSeriesText() {
  for (let serie of seriesDurations) {
    const timeInMinutes =
      serie.days * 24 * 60 + serie.hours * 60 + serie.minutes;
    const minutesInPercent = (timeInMinutes * 100) / lifeSpan;
    serieSpan += minutesInPercent;
    console.log(
      `${
        serie.title
      } took ${timeInMinutes} minutes and it is ${minutesInPercent.toFixed(
        3
      )} % of my life`
    );
  }
  console.log(`In total that is ${serieSpan.toFixed(2)} % of my life`);
}

logOutSeriesText();
