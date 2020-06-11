var numbers = [34, 203, 3, 746, 200, 984, 198, 764, 9];

function quickSort(array) {
  // base case, already sorted
  if (array.length <= 1) {
    return array;
  }
  // pop pivot
  let pivot = array.pop();
  let greaterThan = [];
  let lessThan = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      lessThan.push(array[i]);
    } else {
      greaterThan.push(array[i]);
    }
  }
  return [...quickSort(lessThan), pivot, ...quickSort(greaterThan)];
}

console.log(quickSort(numbers));
