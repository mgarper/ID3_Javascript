const fs = require("fs");
const readline = require("readline");

function launcher() {
  const fileStream = fs.createReadStream("./AdventOfCode/inputs/day2.txt");
  //firstPart(fileStream);
  secondPart(fileStream);
}

function firstPart(fileStream) {
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity, // Handle different line endings
  });
  let text = new Array(1000);
  let i = 0;
  rl.on("line", (line) => {
    text[i] = line;
    i++;
  });

  rl.on("close", () => {
    let count = 0;
    for (let j = 0; j < text.length; j++) {
      let splitLine = text[j].split(" ").map(Number);
      let action = splitLine[0] < splitLine[1] ? "increase" : "decrease";
      let add = true;
      for (let i = 0; i < splitLine.length - 1 && add; i++) {
        if (action === "increase" && splitLine[i] < splitLine[i + 1]) {
          add =
            Math.abs(splitLine[i] - splitLine[i + 1]) >= 1 &&
            Math.abs(splitLine[i] - splitLine[i + 1]) <= 3
              ? true
              : false;
        } else if (action === "decrease" && splitLine[i] > splitLine[i + 1]) {
          add =
            Math.abs(splitLine[i] - splitLine[i + 1]) >= 1 &&
            Math.abs(splitLine[i] - splitLine[i + 1]) <= 3
              ? true
              : false;
        } else {
          add = false;
        }
      }
      count = add ? count + 1 : count;
    }
    console.log(count);
  });
}

function secondPart(fileStream) {
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  let text = [];

  rl.on("line", (line) => {
    text.push(line); // Dynamically push lines into the array
  });

  rl.on("close", () => {
    let count = 0;

    for (let j = 0; j < text.length; j++) {
      let splitLine = text[j].split(" ").map(Number);

      if (isSafe(splitLine)) {
        count++;
      } else {
        // Try removing each element and check if the modified sequence is safe
        let foundSafe = false;
        for (let i = 0; i < splitLine.length; i++) {
          let modifiedLine = [...splitLine];
          modifiedLine.splice(i, 1); // Remove one element at index i
          if (isSafe(modifiedLine)) {
            foundSafe = true;
            break;
          }
        }
        if (foundSafe) count++;
      }
    }
    console.log(count);
  });
}

// Function to check if a sequence is safe
function isSafe(splitLine) {
  let action = splitLine[0] < splitLine[1] ? "increase" : "decrease";

  for (let i = 0; i < splitLine.length - 1; i++) {
    let diff = splitLine[i + 1] - splitLine[i];

    if (action === "increase" && !(diff >= 1 && diff <= 3)) {
      return false;
    } else if (action === "decrease" && !(diff <= -1 && diff >= -3)) {
      return false;
    }
  }
  return true; // Safe sequence
}

launcher();
