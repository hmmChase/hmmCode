// Get the number n(n > 0) to return the reversed sequence from n to 1.

// Example: n = 5 >> [5, 4, 3, 2, 1]

const reverseSeq = n => {
  const sequence = [];
  let number = n;
  while (number > 0) {
    sequence.push(number);
    number--;
  }
  return sequence;
};

console.log(' -----------------------------------');
console.log(reverseSeq(5));
console.log(' -----------------------------------');
// const { assert } = require("chai");

// describe("reverseSeq", function () {
//   it("Sample Test", function () {
//     assert.deepEqual(reverseSeq(5), [5, 4, 3, 2, 1]);
//   });
// });
