// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

var maxSequence = function(arr) {
  return arr.reduce((greatSum, ele1, i) => {
    arr.slice(i).reduce((currSum, ele2) => {
      currSum += ele2;

      if (currSum > greatSum) greatSum = currSum;

      return currSum;
    }, 0);

    return greatSum;
  }, 0);
};

console.log(
  maxSequence([
    -37,
    18,
    35,
    11,
    -20,
    19,
    -12,
    -14,
    25,
    -38,
    -18,
    16,
    18,
    -14,
    -12,
    -18,
    -33,
    -32,
    41,
    -5,
    38,
    -38,
    -17,
    12,
    31,
    34,
    -24,
    -1,
    29,
    11,
    -24
  ])
);

// Expected: 111
// 41 - 11

/*



*/

// describe( "maxSequence", function(){
//   it("should work on an empty array",function(){
//     Test.assertEquals(maxSequence([]), 0);
//   });
//   it("should work on the example",function(){
//     Test.assertEquals(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
//   });
// });


// var maxSequence = function(arr){
//   var min = 0, ans = 0, i, sum = 0;
//   for (i = 0; i < arr.length; ++i) {
//     sum += arr[i];
//     min = Math.min(sum, min);
//     ans = Math.max(ans, sum - min);
//   }
//   return ans;
// }
