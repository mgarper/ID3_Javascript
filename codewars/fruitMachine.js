// LINK --> https://www.codewars.com/kata/590adadea658017d90000039/train/javascript

function fruit(reels, spins) {
  let fruitMap = new Map();
  fruitMap.set("Wild", 10);
  fruitMap.set("Star", 9);
  fruitMap.set("Bell", 8);
  fruitMap.set("Shell", 7);
  fruitMap.set("Seven", 6);
  fruitMap.set("Cherry", 5);
  fruitMap.set("Bar", 4);
  fruitMap.set("King", 3);
  fruitMap.set("Queen", 2);
  fruitMap.set("Jack", 1);

  let spin = [reels[0][spins[0]], reels[1][spins[1]], reels[2][spins[2]]];
  let view = new Map();
  for (let i = 0; i < spin.length; i++) {
    let value = view.get(spin[i]) ? view.get(spin[i]) : 0;
    view.set(spin[i], value + 1);
  }
  if (view.size !== 3) {
    let keysArray = [...view.keys()];
    if (keysArray.length === 1) {
      return fruitMap.get(keysArray[0]) * 10;
    } else {
      let doubleRep =
        view.get(keysArray[0]) === 2 ? keysArray[0] : keysArray[1];
      if (keysArray.includes("Wild")) {
        if (doubleRep === "Wild") {
          return fruitMap.get(doubleRep);
        }
        return fruitMap.get(doubleRep) * 2;
      } else {
        return fruitMap.get(doubleRep);
      }
    }
  } else {
    return 0;
  }
}
