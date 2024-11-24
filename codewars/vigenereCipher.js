// LINK --> https://www.codewars.com/kata/52d1bd3694d26f8d6e0000d3/train/javascript

class VigenèreCipher {
  constructor(key, abc) {
    this.key = key;
    this.abc = abc;
  }

  encode(str) {
    let res = "";
    let length = str.length;
    let auxWord = this.createAuxWord(length);
    for (let i = 0; i < str.length; i++) {
      if (this.abc.includes(str.charAt(i))) {
        let awIndex = this.abc.indexOf(auxWord.charAt(i)) % this.abc.length;
        let strIndex = this.abc.indexOf(str.charAt(i)) % this.abc.length;
        res += this.abc[(awIndex + strIndex) % this.abc.length];
      } else {
        res += str.charAt(i);
      }
    }
    return res;
  }

  decode(str) {
    let res = "";
    let length = str.length;
    let auxWord = this.createAuxWord(length);
    for (let i = 0; i < str.length; i++) {
      if (this.abc.includes(str.charAt(i))) {
        let awIndex = this.abc.indexOf(auxWord.charAt(i)) % this.abc.length;
        let strIndex = this.abc.indexOf(str.charAt(i)) % this.abc.length;
        res +=
          this.abc[(strIndex - awIndex + this.abc.length) % this.abc.length];
      } else {
        res += str.charAt(i);
      }
    }
    return res;
  }

  createAuxWord(length) {
    let auxWord = "";
    while (length > 0) {
      let newPart =
        Math.min(this.key.length, length) === this.key.length
          ? this.key
          : this.key.substring(0, length);
      length -= newPart.length;
      auxWord += newPart;
    }
    return auxWord;
  }
}
