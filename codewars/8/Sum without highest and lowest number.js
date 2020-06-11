// Sum all the numbers of the array(in F# and Haskell you get a list) except the highest and the lowest element(the value, not the index!).
// (The highest / lowest element is respectively only one element at each edge, even if there are more than one with the same value!)

// Example:

// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

// If array is empty, null or None, or if only 1 Element exists, return 0.
// Note: In C++ instead null an empty vector is used.In C there is no null. ; -)

// --There's no null in Haskell, therefore Maybe [Int] is used. Nothing represents null.
// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have created other katas.Have a look if you like coding and challenges.

function sumArray(array) {
  if (array && array.length >= 2) {
    newArray = [...array];

    return newArray
      .sort((a, b) => {
        return a - b;
      }, 0)
      .slice(1, -1)
      .reduce((accum, ele) => {
        accum += ele;
        return accum;
      }, 0);
  } else {
    return 0;
  }
}

sumArray = a => {
  return a
    ? a
        .sort((x, y) => x - y)
        .slice(1, -1)
        .reduce((s, e) => s + e, 0)
    : 0;
};

sumArray([6, 2, 1, 8, 10]);
console.log('TCL: -----------------------------------------------------------');
console.log('TCL: sumArray([6, 2, 1, 8, 10])', sumArray([6, 2, 1, 8, 10]));
console.log('TCL: -----------------------------------------------------------');

// Test.assertEquals(sumArray([6, 2, 1, 8, 10]), 16);

// top
// sumArray = a => {
//   a
//     ? a
//         .sort((x, y) => x - y)
//         .slice(1, -1)
//         .reduce((s, e) => s + e, 0)
//     : 0;
// };
