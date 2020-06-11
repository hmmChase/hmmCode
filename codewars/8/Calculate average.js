// Write function avg which calculates average of numbers in given list.

function find_average(array) {
  const sum = array.reduce((accum, ele) => {
    accum += ele;
    return accum;
  }, 0);

  return sum / array.length;
}

// Test.assertEquals(find_average([1, 1, 1]), 1);
// Test.assertEquals(find_average([1, 2, 3]), 2);

// top
// function find_average(array) {
//   var sum = array.reduce((a, b) => a + b, 0);
//   return sum / array.length;
// }
