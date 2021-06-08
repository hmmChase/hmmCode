// Write function avg which calculates average of numbers in given list.

function find_average(array) {
  const sum = array.reduce((accum, ele) => accum + ele, 0);

  return sum / array.length;
}

console.log(find_average([1, 2, 3]));

// Test.assertEquals(find_average([1, 1, 1]), 1);
// Test.assertEquals(find_average([1, 2, 3]), 2);
