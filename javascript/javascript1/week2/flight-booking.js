function getFullName(firstname, surname, useFormalName, gender) {
  if (useFormalName && gender === "male") {
    return `Lord ${firstname} ${surname}`;
  } else if (useFormalName && gender === "female") {
    return `Lady ${firstname} ${surname}`;
  } else {
    return `${firstname} ${surname}`;
  }
}

const fullname1 = getFullName("Benjamin", "Hughes", true, "male");
const fullname2 = getFullName("Kate", "Jensen", false, "female");

console.log(fullname1);
console.log(fullname2);
