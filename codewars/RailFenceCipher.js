// LINK --> https://www.codewars.com/kata/58c5577d61aefcf3ff000081/train/javascript

function encodeRailFenceCipher(string, numberRails) {
  let auxList = new Array(numberRails).fill("");
  let index = 0;
  let increase = true;
  for (let i = 0; i < string.length; i++) {
    auxList[index] += string.charAt(i);
    if (increase) {
      if (index < numberRails && index + 1 !== numberRails) {
        index++;
      } else {
        increase = false;
        index--;
      }
    } else {
      if (index > 0) {
        index--;
      } else {
        increase = true;
        index++;
      }
    }
  }
  let res = "";
  for (let i = 0; i < numberRails; i++) {
    res += auxList[i];
  }
  return res;
}

function decodeRailFenceCipher(string, numberRails) {
  let res = "";
  let rails = new Array(numberRails);
  if (numberRails === 2) {
    if (string.length % numberRails === 0) {
      rails.push(string.substring(0, string.length / 2));
      rails.push(string.substring(string.length / 2));
    } else {
      rails.push(string.substring(0, Math.floor(string.length / 2) + 1));
      rails.push(string.substring(Math.floor(string.length / 2) + 1));
    }
  } else {
    let numCycles = 2 * (numberRails - 1);
    let baseNumber = Math.floor(string.length / numCycles);
    let sizeList = new Array(numberRails);
    for (let i = 0; i < sizeList.length; i++) {
      if (i === 0 || i === sizeList.length - 1) {
        sizeList[i] = baseNumber;
      } else {
        sizeList[i] = 2 * baseNumber;
      }
    }
    let toAssign = string.length % numCycles;
    let index = 0;
    let increase = true;
    while (toAssign) {
      sizeList[index]++;
      if (increase) {
        if (index < numberRails && index + 1 !== numberRails) {
          index++;
        } else {
          increase = false;
          index--;
        }
      } else {
        if (index > 0) {
          index--;
        } else {
          increase = true;
          index++;
        }
      }
      toAssign--;
    }
    let posIni = 0;
    let posFin = 0;
    for (let i = 0; i < numberRails; i++) {
      posFin += sizeList[i];
      rails[i] = string.substring(posIni, posFin);
      posIni += sizeList[i];
    }
  }
  let index = 0;
  let increase = true;
  let pos = new Array(numberRails).fill(0);
  let size = 0;
  while (size < string.length) {
    res += rails[index].charAt(pos[index]);
    pos[index]++;

    if (increase) {
      if (index + 1 < numberRails) {
        index++;
      } else {
        increase = false;
        index--;
      }
    } else {
      if (index > 0) {
        index--;
      } else {
        increase = true;
        index++;
      }
    }
    size++;
  }
  return res;
}
