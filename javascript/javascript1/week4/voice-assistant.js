const myName = [];
const toDoList = [];
function getReply(command) {
  // for (let i = 0; i < myName.length; i++)
  if (command.includes("Hello my name is")) {
    const newArr = command.split(" ");
    myName.push(newArr[newArr.length - 1]);
    console.log(myName);
    return `Nice to meet you ${myName[myName.length - 1]}`;
  }

  // ===>>> This part of the code works, but doesn`t allow the function to execute the code further
  //else if (myName[i] === myName[0]) {
  // console.log(`You wrote ${myName[0]} twice`)}
  else if (command === "What is my name") {
    return `Your name is ${myName[myName.length - 1]}`;
  } else if (command === "") {
    return `Please tell me your name`;
  } else if (command === "Add fishing to my todo") {
    toDoList.push("fishing");
    return "fishing added to your todo";
  } else if (command === "Add singing in the shower to my todo") {
    toDoList.push("singing in the shower");
    return "singing";
  } else if (command === "Remove fishing from my todo") {
    for (let i = 0; i <= toDoList.length; i++) {
      if (toDoList[i] === "fishing") {
        toDoList.splice(i, 1);
        return "Removed fishing from your todo";
      }
    }
  } else if (command === "What is on my todo?") {
    return `You have ${toDoList.length} things to do: ${toDoList}`;
  } else if (command === "What day is it today?") {
    let date = new Date();
    return `Today is the ${date.getDate()}th of ${date.toLocaleDateString(
      "en-US",
      {
        month: "long",
      }
    )} ${date.getFullYear()}`;
  } else if (command.includes("What is")) {
    const numArr = command.split("");
    let num1 = numArr[numArr.length - 2];
    let num2 = numArr[numArr.length - 6];
    //console.log(num1, num2);
    let operator = numArr[numArr.length - 4];
    //console.log(operator);
    switch (operator) {
      case "+":
        return Number(num1) + Number(num2);
      case "-":
        return Number(num2) - Number(num1);
      case "*":
        return Number(num1) * Number(num2);
      case "/":
        return Number(num2) / Number(num1);
      default:
        return "Please add numbers";
    }
  } else if (command.includes("Set a timer")) {
    const timer = command.split(" ");
    let minutes = timer[timer.length - 2];
    setTimeout(() => console.log("Time is up!"), minutes * 60000);
    return `Time set for ${minutes} minutes`;
  }
}
console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("Hello my name is Denis"));
console.log(getReply("What is my name"));
console.log(getReply(""));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("What is 3 + 3?"));
console.log(getReply("What is 3 - 3?"));
console.log(getReply("What is 3 * 3?"));
console.log(getReply("What is 3 / 3?"));
console.log(getReply("What is?"));
console.log(getReply("Set a timer for 1 minutes"));
