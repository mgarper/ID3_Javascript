const fs = require("fs");
const readline = require("readline");

function launcher() {
  const fileStream = fs.createReadStream("./AdventOfCode/inputs/day1.txt");
  firstPart(fileStream);
  secondPart(fileStream);
}

function firstPart(fileStream) {
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity, // Handle different line endings
  });
  let leftPart = [];
  let rightPart = [];
  rl.on("line", (line) => {
    let splitLine = line.split("   ");
    leftPart.push(Number(splitLine[0]));
    rightPart.push(Number(splitLine[1]));
  });
  rl.on("close", () => {
    let res = 0;
    while (leftPart.length !== 0 && rightPart.length !== 0) {
      let minIndexLeft = leftPart.indexOf(Math.min(...leftPart));
      let minIndexRight = rightPart.indexOf(Math.min(...rightPart));
      res += Math.abs(leftPart[minIndexLeft] - rightPart[minIndexRight]);
      leftPart.splice(minIndexLeft, 1);
      rightPart.splice(minIndexRight, 1);
    }
    console.log(res);
  });
}

function secondPart(fileStream) {
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity, // Handle different line endings
  });
  let leftPart = [];
  let rightPart = [];
  rl.on("line", (line) => {
    let splitLine = line.split("   ");
    leftPart.push(Number(splitLine[0]));
    rightPart.push(Number(splitLine[1]));
  });
  rl.on("close", () => {
    let res = 0;
    const countOccurrences = rightPart.reduce((acc, element) => {
      acc[element] = (acc[element] || 0) + 1;
      return acc;
    }, {});
    for (let i = 0; i < leftPart.length; i++) {
      let mult =
        countOccurrences[leftPart[i]] === undefined
          ? 0
          : countOccurrences[leftPart[i]];
      res += leftPart[i] * mult;
    }
    console.log(res);
  });
}

launcher();
