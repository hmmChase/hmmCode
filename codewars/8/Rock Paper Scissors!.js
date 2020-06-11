// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors', 'paper') // Player 1 won!
// rps('scissors', 'rock') // Player 2 won!
// rps('paper', 'paper') // Draw!

const rps = (p1, p2) => {
  switch (p1) {
    case 'rock':
      switch (p2) {
        case 'rock':
          return 'Draw!';
        case 'paper':
          return 'Player 2 won!';
        case 'scissors':
          return 'Player 1 won!';
        default:
          break;
      }
    case 'paper':
      switch (p2) {
        case 'rock':
          return 'Player 1 won!';
        case 'paper':
          return 'Draw!';
        case 'scissors':
          return 'Player 2 won!';
        default:
          break;
      }
    case 'scissors':
      switch (p2) {
        case 'rock':
          return 'Player 2 won!';
        case 'paper':
          return 'Player 1 won!';
        case 'scissors':
          return 'Draw!';
        default:
          break;
      }
    default:
      break;
  }
};

console.log(' ---------------------------------------------------');
console.log(' rps(scissors, paper);', rps('scissors', 'paper'));
console.log(' ---------------------------------------------------');

// describe('rock paper scissors', function () {
//   const getMsg = (n) => `Player ${n} won!`;

//   it('player 1 win', function () {
//     Test.assertEquals(rps('rock', 'scissors'), getMsg(1));
//     Test.assertEquals(rps('scissors', 'paper'), getMsg(1));
//     Test.assertEquals(rps('paper', 'rock'), getMsg(1));
//   });

//   it('player 2 win', function () {
//     Test.assertEquals(rps('scissors', 'rock'), getMsg(2));
//     Test.assertEquals(rps('paper', 'scissors'), getMsg(2));
//     Test.assertEquals(rps('rock', 'paper'), getMsg(2));
//   });

//   it('draw', function () {
//     Test.assertEquals(rps('rock', 'rock'), 'Draw!');
//     Test.assertEquals(rps('scissors', 'scissors'), 'Draw!');
//     Test.assertEquals(rps('paper', 'paper'), 'Draw!');
//   });
// });

// top
// const rps = (p1, p2) => {
//   if (p1 === p2) return 'Draw!';
//   var rules = { rock: 'scissors', paper: 'rock', scissors: 'paper' };
//   if (p2 === rules[p1]) {
//     return 'Player 1 won!';
//   } else {
//     return 'Player 2 won!';
//   }
// };
