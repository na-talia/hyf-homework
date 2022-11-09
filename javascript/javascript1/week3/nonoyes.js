// Save a note

const notes = [];
function saveNote(content, id) {
  notes.push({ content, id });
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
console.log(notes);

// Get a note

function getNote(id) {
  //
  if (typeof id !== "number") {
    return "Error"; // returns Error if id is not a number
  } else {
    for (let note of notes) {
      if (note.id === id) return note;
    }
  }
}

const firstNote = getNote(1);
console.log(firstNote);
const secondNote = getNote(2);
console.log(secondNote);
const thirdNote = getNote("Hello");
console.log(thirdNote);

// Log out notes
function logOutNotesFormatted() {
  for (let note of notes) {
    console.log(
      `The note with id ${note.id}, has the following note text: ${note.content}`
    );
  }
}
logOutNotesFormatted();

// Unique feature

// add more notes
saveNote("Cook a dinner", 3);
saveNote("Do my homemwork", 4);
saveNote("Sleep", 5);

// I decided to add a key "time" to each object and value 1 by default

for (let i = 0; i < notes.length; i++) {
  notes[i].time = 1;
  notes[1].time = 2; // manually changed a couple of values
  notes[4].time = 8;
  console.log(
    `I need to ${notes[i].content} and it takes ${notes[i].time} hours`
  );
} // and now I can see how much time I need to complete tasks. Not a very useful feature, but it works :D
