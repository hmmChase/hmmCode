/*
Tic Tac Win

2-dimensional array

[
  [x,o,x]
  [o,x,o]
  [o,o,x]
]


any array with all same elements
same index among 3 arrays all same elements

0-0 === 1-1 === 2-2 || 0-2 === 1-1 === 2-0


  for (let i = 0; i < board.length; i++) {
    if (board[0][0] === board[0][1] && board[0][1] === board[0][2]) {
    }

    if (board[0][0] === board[0][1] && board[0][1] === board[0][2]) {
    }
  }


*/

const ticTacWin = board => {
  const topL2botR = board[0][0] === board[1][1] && board[1][1] === board[2][2];
  const botL2topR = board[2][0] === board[1][1] && board[1][1] === board[0][2];

  const topRow = board[0][0] === board[0][1] && board[0][1] === board[0][2];
  const midRow = board[1][0] === board[1][1] && board[1][1] === board[1][2];
  const botRow = board[2][0] === board[2][1] && board[2][1] === board[2][2];

  const firstCol = board[0][0] === board[1][0] && board[1][0] === board[2][0];
  const secondCol = board[0][1] === board[1][1] && board[1][1] === board[2][1];
  const thirdCol = board[0][2] === board[1][2] && board[1][2] === board[2][2];


  if (
    topL2botR ||
    
    botL2topR ||
    topRow ||
    midRow ||
    botRow ||
    firstCol ||
    secondCol ||
    thirdCol
  )
    return true;

  return false;
};

const board = [
  ['o', 'x', 'x'],
  ['o', 'x', 'o'],
  ['x', 'o', 'x']
];

console.log(ticTacWin(board));
