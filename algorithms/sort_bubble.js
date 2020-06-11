var numbers = [34, 203, 3, 746, 200, 984, 198, 764, 9];

function bubbleSort(arrayToSort) {
  for (let i = 0; i < arrayToSort.length; i++) {
    for (let j = 1; j < arrayToSort.length - i; j++) {
      if (arrayToSort[j - 1] > arrayToSort[j]) {
        [arrayToSort[j - 1], arrayToSort[j]] = [
          arrayToSort[j],
          arrayToSort[j - 1],
        ];
      }
    }
  }
  return arrayToSort;
}

console.log(bubbleSort(numbers));
