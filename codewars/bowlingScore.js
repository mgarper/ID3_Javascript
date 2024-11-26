// Link --> https://www.codewars.com/kata/5531abe4855bcc8d1f00004c/train/javascript
function bowlingScore(frames) {
  if (frames.length === 21 && frames.includes("XXX")) {
    return 300;
  } else {
    let totalScore = 0;
    let rounds = frames.split(" ");
    frames = frames.replace(/\s+/g, "");
    let finalRound = rounds[rounds.length - 1];
    let finalRoundVal = finalRoundScore(finalRound);
    for (let i = 0; i < rounds.length - 1; i++) {
      let round = rounds[i];
      frames = frames.substring(round.length);
      if (round.includes("X")) {
        let nextTwo = frames.substring(0, 2);
        if (nextTwo.includes("/")) {
          totalScore += 20;
        } else if (nextTwo.includes("XX")) {
          totalScore += 30;
        } else if (nextTwo.includes("X")) {
          totalScore +=
            Number(nextTwo.charAt(0)) === NaN
              ? 20 + Number(nextTwo.charAt(0))
              : 20 + Number(nextTwo.charAt(1));
        } else {
          totalScore +=
            10 + Number(nextTwo.charAt(0)) + Number(nextTwo.charAt(1));
        }
      } else if (round.includes("/")) {
        if (frames.charAt(0) === "X") {
          totalScore += 20;
        } else {
          totalScore += 10 + Number(frames.charAt(0));
        }
      } else {
        totalScore += Number(round.charAt(0)) + Number(round.charAt(1));
      }
    }
    return totalScore + finalRoundVal;
  }
}

function finalRoundScore(finalRound) {
  let finalRoundPoints = 0;
  let shots = finalRound.split("");
  if (shots.length === 2) {
    finalRoundPoints += Number(shots[0]) + Number(shots[1]);
  } else {
    for (let i = 0; i < shots.length; i++) {
      if (shots[i] === "X") {
        finalRoundPoints += 10;
      } else if (shots[i] === "/") {
        finalRoundPoints += 10;
        finalRoundPoints -= Number(shots[i - 1]);
      } else {
        finalRoundPoints += Number(shots[i]);
      }
    }
  }
  return finalRoundPoints;
}
