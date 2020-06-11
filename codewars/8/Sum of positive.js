function positiveSum(arr) {
  return arr.reduce((accum, ele, i) => {
    if (ele >= 0) {
      accum += ele;
    }
    return accum;
  }, 0);
}

positiveSum([1, -2, 3, 4, 5]);

// Test.assertEquals(positiveSum([1, 2, 3, 4, 5]), 15);
// Test.assertEquals(positiveSum([1, -2, 3, 4, 5]), 13);
// Test.assertEquals(positiveSum([]), 0);
// Test.assertEquals(positiveSum([-1, -2, -3, -4, -5]), 0);
// Test.assertEquals(positiveSum([-1, 2, 3, 4, -5]), 9);
