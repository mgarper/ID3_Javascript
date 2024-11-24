// LINK --> https://www.codewars.com/kata/520446778469526ec0000001/train/javascript

Array.prototype.sameStructureAs = function (other) {
  // Return 'true' if and only if 'other' has the same
  // nesting structure as 'this'.
  return sameStructureAs(other, this);
  // Note: You are given a function isArray(o) that returns
  // whether its argument is an array.
};

function sameStructureAs(val, array) {
  if (isArray(val)) {
    if (isArray(array) && array.length === val.length) {
      let res = true;
      let i = 0;
      while (res && i < val.length) {
        res = sameStructureAs(val[i], array[i]);
        i++;
      }
      return res;
    } else {
      return false;
    }
  } else {
    if (!isArray(array)) {
      return true;
    } else {
      return false;
    }
  }
}
