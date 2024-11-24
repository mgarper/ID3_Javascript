// LINK --> https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript

function solution(list) {
  let res = "";
  let aux = [];
  aux.push("" + list[0]);
  let auxIndex = 0;
  for (let i = 1; i < list.length; i++) {
    if (Number(aux[auxIndex]) + 1 === list[i]) {
      aux.push("" + list[i]);
      auxIndex++;
    } else {
      if (aux.length >= 3) {
        res += `${aux[0]}-${aux[aux.length - 1]},`;
      } else {
        for (let j = 0; j < aux.length; j++) {
          res += aux[j] + ",";
        }
      }
      aux = [];
      aux.push("" + list[i]);
      auxIndex = 0;
    }
  }
  if (aux.length !== 0) {
    if (aux.length >= 3) {
      res += `${aux[0]}-${aux[aux.length - 1]}`;
    } else {
      for (let j = 0; j < aux.length; j++) {
        res += aux[j];
        if (j !== aux.length - 1) {
          res += ",";
        }
      }
    }
  } else {
    res += "," + list[list.length - 1];
  }

  return res;
}
