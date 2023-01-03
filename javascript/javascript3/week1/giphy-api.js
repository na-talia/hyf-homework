const gifKey = "t2bqf6dFtQjkVxvGZj9ldvsQ2Q0k1Gjp";
const gifUrl = "https://api.giphy.com/v1/gifs/search";
const divContainer = document.getElementById("container");

async function getGifs(word, howMany) {
  // Visual Studio Code helped me to convert my function to async function, it works, so I decided to leave it like that
  const response = await fetch(
    `${gifUrl}?q=${word}}&limit=${howMany}&api_key=${gifKey}`
  );
  return await response.json();
}

document.getElementById("gif-button").addEventListener("click", () => {
  divContainer.innerHTML = "";

  const gifName = document.getElementById("gif-name").value;
  const gifNumber = document.getElementById("gif-numbers").value;

  getGifs(gifName, gifNumber).then((gif) => {
    gif.data.forEach((element) => {
      const gifImg = document.createElement("iframe");
      gifImg.setAttribute("src", element.embed_url);
      //gifImg.src = element.embed_url - another way to do this
      divContainer.appendChild(gifImg);
    });
  });
});
