const BASE_URL = `https://crudcrud.com/api/${CRUDCRUD_API_KEY}`;
const HOST_URL = `website-screenshot6.p.rapidapi.com`;

const createScreenshot = document.getElementById("form");
const screenshots = document.getElementById("screenshots");
const enterUrl = document.getElementById("enter-url");
const button = document.getElementById("get-screenshot");
const list = document.getElementById("list-screenshots");
const allScreenshots = [];

const inputUrl = async () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": RAPID_API_KEY,
      "X-RapidAPI-Host": HOST_URL,
    },
  };

  fetch(
    `https://${HOST_URL}/screenshot?url=https://${enterUrl.value}&width=1920&height=1080&fullscreen=true`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  allScreenshots.push(` ${enterUrl.value}`);
  console.log(enterUrl.value);
  console.log(allScreenshots);
  list.innerHTML = `<div class="saved-screenshots">You have saved ${allScreenshots.length} screenshots:<br>${allScreenshots}</div>`;
};

const saveScreenshot = (post) => {
  const div = document.createElement("div");
  div.id = post._id;
  const p = document.createElement("p");
  p.innerHTML = post.url;
  div.appendChild(p);

  const img = document.createElement("img");
  img.src = post.screenshot;
  div.appendChild(img);

  const button = document.createElement("button");
  button.innerHTML = "Delete";
  button.addEventListener("click", () => {
    deleteScreenshot(post._id);
  });
  div.appendChild(button);

  return div;
};

//Delete screenshot
const deleteScreenshot = async (id) => {
  await fetch(`${BASE_URL}/blog/${id}`, {
    method: "DELETE",
  });
  document.getElementById(id).innerHTML = "";
};

// Post screenshot
const postScreenshot = async (event) => {
  event.preventDefault();

  if (!enterUrl.value) {
    alert("Please enter a valid url");
  } else {
    await inputUrl();
    const body = {
      url: enterUrl.value,
    };
    const response = await fetch(`${BASE_URL}/blog`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    screenshots.appendChild(saveScreenshot(data));
  }
  enterUrl.value = "";
};

button.addEventListener("click", postScreenshot);
