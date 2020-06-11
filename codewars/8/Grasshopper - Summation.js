// Summation
// Write a program that finds the summation of every number between 1 and num.The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

var summation = function(num) {
  let sum = 0;
  for (let index = 1; index < num + 1; index++) {
    sum += index;
  }
  return sum;
};

console.log(' ---------------------------');
console.log(' summation(8)', summation(8));
console.log(' ---------------------------');

// describe('summation', function() {
//   it('should return the correct total', function() {
//     Test.assertEquals(summation(1), 1);
//     Test.assertEquals(summation(8), 36);
//   });
// });

// top
// const summation = n => (n * (n + 1)) / 2;
