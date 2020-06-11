// Convert number to reversed array of digits
// Given a random number:

// C#: long;
// C++: unsigned long;
// You have to return the digits of this number within an array in reverse order.

//   Example:
// 348597 => [7, 9, 5, 8, 4, 3]

function digitize(n) {
  return n
    .toString()
    .split('')
    .reverse()
    .map(ele => parseInt(ele));
}

digitize(35231);
console.log(' ---------------------------------');
console.log(' digitize(35231)', digitize(35231));
console.log(' ---------------------------------');

// Test.assertDeepEquals(digitize(35231), [1, 3, 2, 5, 3]);

// top
// function digitize(n) {
//   return String(n)
//     .split('')
//     .map(Number)
//     .reverse();
// }
