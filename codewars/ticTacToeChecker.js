function isSolved(board) {
  let xWon = false;
  let oWon = false;
  let hasZeros = false;

  //Check horizontal
  board.forEach((element) => {
    if (!xWon && !oWon) {
      if (
        element[0] === element[1] &&
        element[0] === element[2] &&
        element[0] !== 0
      ) {
        if (element[0] === 1) {
          xWon = true;
        } else {
          oWon = true;
        }
      }
    }
    if (!hasZeros && element.includes(0)) {
      hasZeros = true;
    }
  });

  //Check vertical
  if (!xWon && !oWon) {
    for (let i = 0; i < board.length; i++) {
      if (!xWon && !oWon) {
        if (
          board[0][i] === board[1][i] &&
          board[0][i] === board[2][i] &&
          board[0][i] !== 0
        ) {
          if (board[0][i] === 1) {
            xWon = true;
          } else {
            oWon = true;
          }
        }
      }
    }
  }

  //Check diagonal
  if (!xWon && !oWon) {
    if (
      board[0][0] === board[1][1] &&
      board[0][0] === board[2][2] &&
      board[0][0] !== 0
    ) {
      if (board[0][0] === 1) {
        xWon = true;
      } else {
        oWon = true;
      }
    }
    if (
      board[0][2] === board[1][1] &&
      board[0][2] === board[2][0] &&
      board[0][2] !== 0
    ) {
      if (board[0][2] === 1) {
        xWon = true;
      } else {
        oWon = true;
      }
    }
  }

  let res = 0;
  if (!xWon && !oWon) {
    res = hasZeros ? -1 : 0;
  } else {
    res = xWon ? 1 : 2;
  }
  return res;
}

console.log(
  isSolved([
    [0, 1, 1],
    [2, 0, 2],
    [2, 1, 0],
  ])
);
