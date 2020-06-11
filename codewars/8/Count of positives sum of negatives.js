// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

// If the input array is empty or null, return an empty array.

//   Example
// For input[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
  const copyInput = Array.isArray(input) ? [...input] : [];

  return copyInput.length
    ? copyInput.reduce(
        (accum, ele) => {
          ele > 0 ? accum[0]++ : (accum[1] += ele);
          return accum;
        },
        [0, 0]
      )
    : [];
}

var testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
var actual = countPositivesSumNegatives(testData);
console.log(' ---------------');
console.log(' actual', actual);
console.log(' ---------------');

// describe("Example tests", function () {
//   var testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
//   var actual = countPositivesSumNegatives(testData);
//   var expected = [10, -65];

//   Test.expect(actual[0] == expected[0] && actual[1] == expected[1], "Wrong return value.");

//   testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
//   actual = countPositivesSumNegatives(testData);
//   expected = [8, -50];

//   Test.expect(actual[0] == expected[0] && actual[1] == expected[1], "Wrong return value.");
// });

// top
// function countPositivesSumNegatives(input) {
//   return input && input.length
//     ? input.reduce(
//         function(p, c, i, s) {
//           c <= 0 ? (p[1] += c) : (p[0] += 1);
//           return p;
//         },
//         [0, 0]
//       )
//     : [];
// }
