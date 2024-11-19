// link --> https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

function rgb(r, g, b) {
  return `${rgbInd(r)}${rgbInd(g)}${rgbInd(b)}`;
}

function rgbInd(v) {
  if (v >= 255) {
    return "FF";
  } else if (v <= 0) {
    return "00";
  } else {
    return toBinaryString(v);
  }
}

function toBinaryString(v) {
  let res = "";
  while (v > 0) {
    res = (v % 2) + res;
    v = Math.floor(v / 2);
  }
  while (res.length < 8) {
    res = "0" + res;
  }
  return `${toHexBase(res.substring(0, 4))}${toHexBase(res.substring(4))}`;
}

function toHexBase(v) {
  let overNine = {
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F",
  };
  let res = 0;
  let j = 3;
  for (let i = 0; i < 4; i++) {
    if (Number(v[i]) === 1) {
      res += Math.pow(2, j);
    }
    j--;
  }
  if (res > 9) {
    res = overNine[`${res}`];
  }
  return res;
}

console.log(rgb(173, 255, 47)); //ADFF2F
