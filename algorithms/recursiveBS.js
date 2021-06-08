const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 3;

const recursiveBS = (target, arr) => {
  if (arr.length === 1 && arr[0] !== target) {
    return 'not found';
  }

  const mid = Math.floor(arr.length / 2);

  if (target === arr[mid]) {
    return mid;
  } else if (target < arr[mid]) {
    return recursiveBS(target, arr.slice(0, mid));
  } else if (target > arr[mid]) {
    return recursiveBS(target, arr.slice(mid));
  }
};

console.log(recursiveBS(target, sortedArray));
