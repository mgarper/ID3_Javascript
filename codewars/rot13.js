// link --> https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript
function rot13(message) {
  let alph = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let res = "";
  let i = 0;
  while (i < message.length) {
    if (alph.indexOf(message.charAt(i).toLowerCase()) !== -1) {
      let iniPos = alph.indexOf(message.charAt(i).toLowerCase());
      let finPos =
        iniPos + 13 >= alph.length ? iniPos + 13 - alph.length : iniPos + 13;
      if (message.charAt(i) !== message.charAt(i).toLowerCase()) {
        res += alph[finPos].toUpperCase();
      } else {
        res += alph[finPos];
      }
    } else {
      console.log("AYO");
      res += message.charAt(i);
    }
    i++;
  }
  return res;
}
