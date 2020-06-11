var numbers = [34, 203, 3, 746, 200, 984, 198, 764, 9];

function insertionSort(arrayToSort) {
  //loop through array
  for (var i = 0; i < arrayToSort.length; i++) {
    console.log('------new loop------');

    // get current number to test
    var numberToBeSorted = arrayToSort[i];
    console.log('numberToBeSorted: ', numberToBeSorted);

    // get previous elements index to compare number to
    var compareIndex = i - 1;
    console.log('comparePosition: ', compareIndex);
    console.log('comparePosition Value: ', arrayToSort[compareIndex]);

    // loop backwards while i index >= 0 and current element > temp var
    while (compareIndex >= 0 && arrayToSort[compareIndex] > numberToBeSorted) {
      console.log(
        'if',
        arrayToSort[compareIndex],
        '>',
        numberToBeSorted,
        'is true'
      );
      console.log('start loop');

      console.log('reverse elements');
      console.log(
        'set',
        arrayToSort[compareIndex + 1],
        'to equal',
        arrayToSort[compareIndex]
      );
      arrayToSort[compareIndex + 1] = arrayToSort[compareIndex];
      console.log(
        'now compare the element before that and retest and loop if needed'
      );
      compareIndex--;

      console.log('end of while loop');
    }

    // set next elem equal to temp
    arrayToSort[compareIndex + 1] = numberToBeSorted;

    // console.log('end: ', array);
  }
  return arrayToSort;
}

console.log(insertionSort(numbers));
