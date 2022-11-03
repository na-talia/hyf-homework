const activities = [];
function addActivity(date, activity, duration) {
  activities.push({ date, activity, duration });
  console.log(`${date} I watched ${activity} for ${duration} minutes`);
}

const limit = 100;

let date = new Date().toLocaleDateString();

console.log(activities);

addActivity(date, "Youtube", 60);
addActivity(date, "TikTok", 20);
addActivity(date, "TV", 30);

function showStatus() {
  let activityTime = 0;
  for (let i = 0; i < activities.length; i++) {
    activityTime += activities[i].duration;
  }

  if (activityTime > limit) {
    // Extra feature - exceeding the limit (in minutes) and how long the activities lasts in percent

    const exceedingLimit = activityTime - limit;
    const minutes = 1440; // 1 day = 1440 minutes
    const minutesInPercent = (activityTime * 100) / minutes;

    console.log(
      `You have reached your limit, no more smartphoning for you. You exceeded the limit by ${exceedingLimit} minutes. You have already spent ${activityTime} minutes, which is ${minutesInPercent.toFixed()} percent of the day!!!`
    );
  } else if (activityTime) {
    console.log(
      `You have added ${activities.length} activities. They amount to ${activityTime} minutes`
    );
    console.log(activityTime);
  } else console.log(`Please add your activity`);
}
addActivity(date, "Netflix", 30);

showStatus(activities);
