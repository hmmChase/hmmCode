// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x>y - 3 points
// if x<y - 0 point
// if x=y - 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

function points(games) {
  return games.reduce((accum, game) => {
    console.log('TCL: points -> game', game);
    const splitGame = game.split(':');
    console.log('TCL: points -> splitGame', splitGame);

    if (splitGame[0] > splitGame[1]) accum += 3;
    if (splitGame[0] === splitGame[1]) accum += 1;

    return accum;
  }, 0);
}

const answer = points([
  '1:1',
  '2:0',
  '3:0',
  '4:0',
  '2:1',
  '3:1',
  '4:1',
  '3:2',
  '4:2',
  '4:3'
]);

console.log('TCL: answer', answer);

// describe('Basic tests', function() {
//   it("Testing for points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3'])", function() {
//     Test.assertEquals(
//       points([
//         '1:0',
//         '2:0',
//         '3:0',
//         '4:0',
//         '2:1',
//         '3:1',
//         '4:1',
//         '3:2',
//         '4:2',
//         '4:3'
//       ]),
//       30
//     );
//   });
//   it("Testing for points(['1:1','2:2','3:3','4:4','2:2','3:3','4:4','3:3','4:4','4:4'])", function() {
//     Test.assertEquals(
//       points([
//         '1:1',
//         '2:2',
//         '3:3',
//         '4:4',
//         '2:2',
//         '3:3',
//         '4:4',
//         '3:3',
//         '4:4',
//         '4:4'
//       ]),
//       10
//     );
//   });
//   it("Testing for points(['0:1','0:2','0:3','0:4','1:2','1:3','1:4','2:3','2:4','3:4'])", function() {
//     Test.assertEquals(
//       points([
//         '0:1',
//         '0:2',
//         '0:3',
//         '0:4',
//         '1:2',
//         '1:3',
//         '1:4',
//         '2:3',
//         '2:4',
//         '3:4'
//       ]),
//       0
//     );
//   });
//   it("Testing for points(['1:0','2:0','3:0','4:0','2:1','1:3','1:4','2:3','2:4','3:4'])", function() {
//     Test.assertEquals(
//       points([
//         '1:0',
//         '2:0',
//         '3:0',
//         '4:0',
//         '2:1',
//         '1:3',
//         '1:4',
//         '2:3',
//         '2:4',
//         '3:4'
//       ]),
//       15
//     );
//   });
//   it("Testing for points(['1:0','2:0','3:0','4:4','2:2','3:3','1:4','2:3','2:4','3:4'])", function() {
//     Test.assertEquals(
//       points([
//         '1:0',
//         '2:0',
//         '3:0',
//         '4:4',
//         '2:2',
//         '3:3',
//         '1:4',
//         '2:3',
//         '2:4',
//         '3:4'
//       ]),
//       12
//     );
//   });
// });
