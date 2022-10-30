const class07Students = [];
function addStudentToClass(studentName) {
  if (studentName === "") {
    console.log("Please add a new student`s name");
  } else if (class07Students.includes(studentName)) {
    console.log(`Student ${studentName} is already in the class`);
  } else if (studentName === "Queen") {
    class07Students.push(studentName);
    console.log("There is always a spot for the Queen in our class");
    console.log(class07Students);
  } else if (class07Students.length >= 6) {
    console.log("Cannot add more students to the class 07");
  } else {
    class07Students.push(studentName);
    console.log(class07Students);
  }
}

function getNumberOfStudents() {
  return class07Students.length;
}
console.log(class07Students);

addStudentToClass("Mary");
addStudentToClass("Jane");
addStudentToClass("Kylie");
addStudentToClass("Amy");
addStudentToClass("Mira");
addStudentToClass("Leon");
addStudentToClass("Jan");
addStudentToClass("Kylie");
addStudentToClass("");
addStudentToClass("Queen");
addStudentToClass("Kira");

getNumberOfStudents();
console.log(`There are ${class07Students.length} students in the class`);
console.log(`There are ${getNumberOfStudents()} students in the class`);
