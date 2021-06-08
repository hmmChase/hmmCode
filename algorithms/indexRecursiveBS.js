const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 3;

const indexRecursiveBS = (
  target,
  arr,
  low = 0,
  high = sortedArray.length - 1
) => {
  const mid = Math.floor((low + high) / 2);

  if (target === arr[mid]) {
    return mid;
  } else if (target < arr[mid]) {
    return indexRecursiveBS(target, arr, low, mid - 1);
  } else if (target > arr[mid]) {
    return indexRecursiveBS(target, arr, mid + 1, high);
  }

  return 'not found';
};

console.log(indexRecursiveBS(target, sortedArray));
