// Complete the square sum method so that it squares each number passed into it and then sums the results together.

// For example: squareSum([1, 2, 2]) should return 9 because 1 ^ 2 + 2 ^ 2 + 2 ^ 2 = 9.

function squareSum(numbers) {
  return numbers.length
    ? numbers.reduce((accum, ele) => accum + ele ** 2, 0)
    : 0;
}

console.log(' -------------------------------------');
console.log(
  ' squareSum( [-17,2,11,-7,20,8)',
  squareSum([-17, 2, 11, -7, 20, 8])
);
console.log(' -------------------------------------');

// Test.assertEquals(squareSum([1, 2]), 5)
// Test.assertEquals(squareSum([0, 3, 4, 5]), 50)
