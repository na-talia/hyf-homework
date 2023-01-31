/* The "argv" array contains everything given on the command line. 
The first item (argv[0]) will be the path to node itself, and the second item (argv[1]) will be the path to your script code.
So a slice starting at 2 will discard both of those and return everything else that was typed on the command line.*/

const arguments = process.argv.slice(2);

const sum = arguments.reduce((prev, curr) => Number(prev) + Number(curr), 0);

if (arguments.length === 0) {
  console.log("No arguments are provided");
} else if (isNaN(sum)) {
  console.log("Please provide numbers only");
} else {
  const average = (sum / arguments.length).toFixed(2);
  console.log(`The average is: ${average}`);
}
