// -----

/*

row=4
col=5


subproblems
move right = c + 1
move down = r + 1

top left = 1,1
bottom right = c,r

o o o o x
o x o o o
o o o x o
o x o o o

robot(r=1,c=1)

              rbt(1,1)
              d /    \ r
          rbt(2,1)  rbt(1,2)
          d /    \ r
      rbt(3,1)  rbt(2,2)
      d /    \ r
rbt(4,1)  rbt(3,2)


base (4,5) return true
else false

*/

// foreach grid
//   - foreach cell

const findPaths = grid => {
  // store for valid moves
  const paths = [];

  // get last row index
  const endRow = grid.length - 1;

  // get last col index
  const endCol = grid[0].length - 1;

  //
  const recurse = (row, col, currPath) => {
    console.log('currPath:', currPath);

    // base case
    // if at the end of the grid
    if (row === endRow && col === endCol) {
      //
      paths.push(currPath.concat([[row, col]]));

      // else if not at the end
    } else {
      // look down
      // if not end row, and
      // the next row, same col is not an X
      if (row < endRow && grid[row + 1][col] !== 'x') {
        // store as valid path
        const updatedCurrPath = currPath.concat([[row, col]]);

        // proceed to next row
        recurse(row + 1, col, updatedCurrPath);
      }

      // look right
      // if not end col, and
      // the same row, next col is not an X
      if (col < endCol && grid[row][col + 1] !== 'x') {
        // store as valid path
        const updatedCurrPath = currPath.concat([[row, col]]);

        // proceed to next col
        recurse(row, col + 1, updatedCurrPath);
      }
    }
  };

  // start here
  // inputs are row index, col index, currPath
  // 0, 0 is first cell
  recurse(0, 0, []);

  //
  return paths;
};

const grid = [
  ['o', 'o', 'o', 'o'],
  ['o', 'x', 'o', 'x'],
  ['x', 'o', 'o', 'o']
];

console.log(findPaths(grid));
