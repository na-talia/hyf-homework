const secondsInput = document.getElementById("seconds");
const secondsButton = document.getElementById("get-seconds");
const gameOver = document.getElementById("game-over");
const winner = document.getElementById("winner");
const pressS = document.getElementById("press-s");
const pressL = document.getElementById("press-l");
const countDown = document.getElementById("count-down");

secondsButton.addEventListener("click", () => {
  let time = secondsInput.value;
  setTimeout(() => {
    gameOver.innerHTML = `${secondsInput.value} seconds have passed!`;
    whoIsWinner();
  }, time * 1000);

  const countingD = function () {
    const timer = setInterval(() => {
      time--;
      countDown.innerHTML = time;
      if (time <= 0) {
        clearInterval(timer);
        countDown.innerHTML = "GAME OVER!";
      }
    }, 1000);
  };
  countingD();
});

let playerS = 0;
let playerL = 0;
let confetti = null;

// shows which button the players are pressing
const key = document.getElementById("key");
document.onkeydown = function (e) {
  key.innerHTML = `${e.key} is pressed`;

  // I read about KeyboardEvent.code here: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code
  if (e.code === "KeyS") {
    playerS++;
    pressS.innerHTML = `Press S: <div>${playerS}</div>`;
  } else if (e.code === "KeyL") {
    playerL++;
    pressL.innerHTML = `Press L: <div>${playerL}</div>`;
  }
};
function whoIsWinner() {
  if (playerS > playerL) {
    confettisettings = { target: "confetti-winner", size: 1 };
    confetti = new ConfettiGenerator(confettisettings);
    confetti.render();
    pressS.style.backgroundColor = "#acdfb5";
    document.body.style.backgroundColor = "#acdfb5";
    pressS.style.fontSize = "2rem";
    pressS.innerHTML = "S is a WINNER";
  } else if (playerS < playerL) {
    confettisettings = { target: "confetti-winner", size: 1 };
    confetti = new ConfettiGenerator(confettisettings);
    confetti.render();
    pressL.style.backgroundColor = "#dfacd6";
    document.body.style.backgroundColor = "#dfacd6";
    pressL.style.fontSize = "2rem";
    pressL.innerHTML = "L is a WINNER";
  } else {
    winner.innerHTML = "Draw!";
  }
}
const resetBtn = document
  .getElementById("reset")
  .addEventListener("click", () => {
    gameOver.innerHTML = "";
    winner.innerHTML = "";
    secondsInput.value = "";
    key.innerHTML = "";
    pressL.innerHTML = "";
    pressS.innerHTML = "";
    playerS = 0;
    playerL = 0;
    document.body.style.backgroundColor = "white";
    confetti.clear();
    countDown.innerHTML = "";
  });
