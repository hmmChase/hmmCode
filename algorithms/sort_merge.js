var numbers = [34, 203, 3, 746, 200, 984, 198, 764, 9];

// split array in half, then split the resulting arrays until there is only one element left in each array

function sort(array) {
  // split arrays if needed
  if (array.length <= 1) {
    return array;
  }
  let midIndex = Math.floor(array.length / 2);
  let leftArray = array.slice(0, midIndex);
  let rightArray = array.slice(midIndex);
  return merge(sort(leftArray), sort(rightArray));
}

function merge(leftArray, rightArray) {
  let result = [];

  while (leftArray.length && rightArray.length) {
    if (leftArray[0] <= rightArray[0]) {
      result.push(leftArray.shift());
    } else {
      result.push(rightArray.shift());
    }
  }
  while (leftArray.length) {
    result.push(leftArray.shift());
  }

  while (rightArray.length) {
    result.push(rightArray.shift());
  }

  return result;
}

console.log(sort(numbers));
