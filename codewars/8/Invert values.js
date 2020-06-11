// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

function invert(array) {
  if (array.length === 0) {
    return array;
  }

  return array.map((ele, index) => {
    if (ele > 0) {
      return -ele;
    } else if (ele < 0) {
      const stringed = JSON.stringify(ele);
      return parseInt(stringed.substring(1));
    } else {
      return ele;
    }
  });
}

// top
// function invert(array) {
//   return array.map(x => (x === 0 ? x : -x));
// }

invert([-1, 2, 3, 4, 5]);

// invert([1, 2, 3, 4, 5]) == [-1, -2, -3, -4, -5];
// invert([1, -2, 3, -4, 5]) == [-1, 2, -3, 4, -5];
// invert([]) == [];

// Test.assertDeepEquals(invert([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5]);
// Test.assertDeepEquals(invert([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5]);
// Test.assertDeepEquals(invert([]), []);
// Test.assertDeepEquals(invert([0]), [0]);
