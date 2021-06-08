/*

if j < i

*/

const subSort = numArr => {
  const result = [];

  for (let i = 0; i < numArr.length; i++) {
    const eleI = numArr[i];

    for (let j = i + 1; j < numArr.length; j++) {
      const eleJ = numArr[j];

      // let currLowIdx;

      if (eleI > eleJ) {
        console.log('i:', i);

        // currLowIdx = i;

        // console.log('currLowIdx:', currLowIdx);

        // if (eleI < eleJ) currLowIdx = i;
      }

      result.push(i);
    }
  }

  console.log('result:', result);
};

const numArr = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19];

console.log(subSort(numArr));
