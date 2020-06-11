// Create a function with two arguments that will return a list of length(n) with multiples of(x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array(or list in Python, Haskell or Elixir).

//   Examples:

// countBy(1, 10) === [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// countBy(2, 5) === [2, 4, 6, 8, 10]

function countBy(x, n) {
  const z = [];

  for (let index = 1; index < n + 1; index++) {
    z.push(x * index);
  }

  return z;
}

console.log(' -----------------------------');
console.log(' countBy(2, 5)', countBy(2, 5));
console.log(' -----------------------------');

// Test.assertSimilar(countBy(1, 5), [1, 2, 3, 4, 5], "Array does not match")
// Test.assertSimilar(countBy(2, 5), [2, 4, 6, 8, 10], "Array does not match")
