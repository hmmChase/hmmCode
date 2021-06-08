/*

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

*/

function positiveSum1(arr) {
  return arr.reduce((accum, ele, i) => {
    if (ele >= 0) {
      accum += ele;
    }
    return accum;
  }, 0);
}

function positiveSum2(arr) {
  let sum = 0;

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];

    if (element >= 0) {
      sum += element;
    }
  }

  return sum;
}

positiveSum1([1, -2, 3, 4, 5]);
positiveSum2([1, -2, 3, 4, 5]);

// Test.assertEquals(positiveSum([1, 2, 3, 4, 5]), 15);
// Test.assertEquals(positiveSum([1, -2, 3, 4, 5]), 13);
// Test.assertEquals(positiveSum([]), 0);
// Test.assertEquals(positiveSum([-1, -2, -3, -4, -5]), 0);
// Test.assertEquals(positiveSum([-1, 2, 3, 4, -5]), 9);
