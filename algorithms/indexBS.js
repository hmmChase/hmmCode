const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 1;

const indexBS = (target, arr) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (target === arr[mid]) {
      return mid;
    } else if (target < arr[mid]) {
      high = mid - 1;
    } else if (target > arr[mid]) {
      low = mid + 1;
    }
  }

  return 'not found';
};

console.log(indexBS(target, sortedArray));
