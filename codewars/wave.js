// LINK --> https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript

function wave(str) {
  let res = [];
  let pos = 0;
  let aux = str.split("");
  aux.forEach((element) => {
    if (element !== " ") {
      res.push(
        str.substring(0, pos) + element.toUpperCase() + str.substring(pos + 1)
      );
    }
    pos++;
  });
  return res;
}

console.log(wave("two words"));
