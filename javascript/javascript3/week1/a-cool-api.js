//"Bored" is a free API to find something to do by getting suggestions for random activities

const myActivity = document.createElement("p");
document.body.append(myActivity);

fetch("https://www.boredapi.com/api/activity/")
  .then((response) => response.json())
  .then((bored) => {
    console.log(bored);
    myActivity.innerHTML = `Your activity is: ${bored.activity}`;
  });

/* JSON document with object data type.
  The value of the first key "Activity" is shown on the page */
