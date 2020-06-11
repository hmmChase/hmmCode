// Consider an array of sheep where some sheep may be missing from their place.We need a function that counts the number of sheep present in the array(true means present).

// For example,

//   [true, true, true, false,
//     true, true, true, true,
//     true, false, true, false,
//     true, false, false, true,
//     true, true, true, true,
//     false, false, true, true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.reduce((accum, ele) => {
    if (ele) {
      accum++;
    }
    return accum;
  }, 0);
}

var array1 = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true
];

// countSheeps(array1);
console.log('countSheeps(array1): ', countSheeps(array1));

// Test.expect(countSheeps(array1) == 17, "There are 17 sheeps in total")

// top
// function countSheeps(arrayOfSheeps) {
//   return arrayOfSheeps.filter(Boolean).length;
// }
