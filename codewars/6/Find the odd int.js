// Given an array, find the int that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  const occuranceObj = A.reduce((countArr, int) => {
    if (!countArr[int]) countArr[int] = 0;

    countArr[int]++;

    return countArr;
  }, {});

  const occurKeys = Object.keys(occuranceObj);

  const occurIndex = occurKeys.findIndex(key => occuranceObj[key] % 2 === 1);

  return parseInt(occurKeys[occurIndex]);
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));

// function doTest(a, n) {
//   console.log("A = ", a);
//   console.log("n = ", n);
//   Test.assertEquals(findOdd(a), n);
// }
// Test.describe('Example tests', function() {
//   doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
//   doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
//   doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
//   doTest([10], 10);
//   doTest([1,1,1,1,1,1,10,1,1,1,1], 10);
//   doTest([5,4,3,2,1,5,4,3,2,10,10], 1);
// });

// function findOdd(A) {
//   var obj = {};
//   A.forEach(function(el) {
//     obj[el] ? obj[el]++ : (obj[el] = 1);
//   });

//   for (prop in obj) {
//     if (obj[prop] % 2 !== 0) return Number(prop);
//   }
// }
