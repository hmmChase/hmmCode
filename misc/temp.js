/*

[1, 2, 3, 11, 15], [8, 19, 23, 127, 235]

i = 0
j = 0

arr1[i] diff arr[j] = 7

diff = 7

if arr1[i] < arr[j]

  if diff > smallestDiff

  J++






*/

const smallestDiff = (arr1, arr2) => {
  let smallestDiff;

  // big O
  // n = size of input
  // n * m

  // sort = n log n + m log m

  // for (let i = 0; i < arr1.length; i++) {
    const diff = Math.abs(arr1[i] - arr2[j]);

    // for (let j = 0; j < arr2.length; j++) {

    //   if (!smallestDiff) {
    //     smallestDiff = diff;
    //   }

    //   if (diff < smallestDiff) {
    //     smallestDiff = diff;
    //   }
    // }
  // }

  return smallestDiff;
};

// const smallDiff = (arr1, arr2) => {
//   const combined = [...arr1, ...arr2];
//   console.log('combined:', combined);

//   for (let i = 0; i < combined.length; i++) {}
// };

console.log(smallestDiff([1, 2, 3, 11, 15], [8, 19, 23, 127, 235]));
