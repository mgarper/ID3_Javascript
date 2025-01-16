// LINK --> https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript

function incrementString(strng) {
  let numbers = strng.match(/\d+/g) || [];
  if (numbers.length === 0) {
    return `${strng}1`;
  } else {
    let word = strng.substring(
      0,
      strng.length - numbers[numbers.length - 1].length
    );
    let aux = numbers[numbers.length - 1].split("");
    let beginning = aux.indexOf(aux.find((number) => Number(number) !== 0));
    let res = "";
    if (beginning >= 0) {
      let valueInc = `${Number(aux.slice(beginning).join("")) + 1}`;
      let dif = numbers[0].length - valueInc.length;
      res =
        dif <= 0
          ? `${word}${valueInc}`
          : `${word}${"0".repeat(dif)}${valueInc}`;
    } else {
      res = `${word}${"0".repeat(numbers[0].length - 1)}1`;
    }
    return res;
  }
}
