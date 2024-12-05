// LINK --> https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript

function countSmileys(arr) {
  let validEyes = ": ;";
  let validNose = "- ~";
  let validMouth = ") D";
  let count = 0;
  arr.forEach((element) => {
    let hasValidEyes = validEyes.includes(element.charAt(0));
    let hasValidNose = element.length === 2;
    let hasValidMouth = validMouth.includes(element.charAt(element.length - 1));
    if (element.length === 3) {
      hasValidNose = validNose.includes(element.charAt(1));
    }
    count = hasValidEyes && hasValidNose && hasValidMouth ? count + 1 : count;
  });
  return count;
}
