// It's the academic year's end, fateful moment of your school report.The averages must be calculated.All the students come to you and entreat you to calculate their average for them.Easy! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

function getAverage(marks) {
  const sum = marks.reduce((mean, num) => {
    return mean + num;
  }, 0);

  return Math.floor(sum / marks.length);
}

getAverage([1, 1, 1, 1, 1, 1, 1, 2]);
console.log(
  ' ---------------------------------------------------------------------------'
);
console.log(
  ' getAverage([1, 1, 1, 1, 1, 1, 1, 2])',
  getAverage([1, 1, 1, 1, 1, 1, 1, 2])
);
console.log(
  ' ---------------------------------------------------------------------------'
);

// Test.assertEquals(getAverage([2, 2, 2, 2]), 2);
// Test.assertEquals(getAverage([1, 2, 3, 4, 5,]), 3);
// Test.assertEquals(getAverage([1, 1, 1, 1, 1, 1, 1, 2]), 1);

// top;
// function getAverage(marks) {
//   return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
// }
