class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function treeByLevels(rootNode) {
  let res = [];
  if (rootNode !== null) {
    let explore = [rootNode];
    while (explore.length !== 0) {
      res.push(explore[0].value);
      if (explore[0].left !== null) {
        explore.push(explore[0].left);
      }
      if (explore[0].right !== null) {
        explore.push(explore[0].right);
      }
      explore.shift();
    }
  }
  return res;
}
