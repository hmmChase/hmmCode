// Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples
// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

// function GetSum(a, b) {
//   if (a === b) return a;

//   const start = Math.min(a, b);
//   const end = Math.max(a, b);

//   let inbetween = start;
//   let sum = 0;

//   while (inbetween <= end) {
//     sum += inbetween;
//     inbetween++;
//   }

//   return sum;
// }

// Test.describe("Basic Tests:", function(){

//   Test.assertEquals(GetSum(0,-1),-1);
//   Test.assertEquals(GetSum(0,1),1);

// });

const GetSum = (a, b) => {
  let min = Math.min(a, b);
  let max = Math.max(a, b);

  // getting the difference and adding 1
  const what1 = max - min + 1;
  console.log(': GetSum -> what1', what1);

  // get the sum
  const what2 = min + max;
  console.log(': GetSum -> what2', what2);

  // difference times sum + 1
  console.log(': GetSum -> what1 * what2', what1 * what2);

  // divide in half
  return (what1 * what2) / 2;
};

console.log(GetSum(-1, 2));
