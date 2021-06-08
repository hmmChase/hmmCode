/*

- https://www.cs.usfca.edu/~galles/visualization/Search.html
- https://blog.penjee.com/binary-vs-linear-search-animated-gifs/


1. Find the start and end point of the array
  - often referred to as the low and high
  - low will be index 0, high will be size of the array minus 1

2. Find the median of the array

3. Compare the search target with the median

4a. if they match, then we have found the target

4b. If the target is smaller than the median
  - that means anything larger than the median will also be larger than the target so we can neglect those
  - We do this by decreasing the upper bound index
    - update it to be median minus 1
    - because the median value was compared it can also be neglected

4c. If the target is larget than the median
  - increase the lower bound
  - update it to be median + 1

5. Repeat the above steps until the target is found, or all numbers have been checked


BigO = O(log n)

1. func takes in (target, array)
2. Edge case
  - If array has only 1 element, and that element is not our search value, end the function
3. Get middle of array
4. Compare the search value to the middle
  - if target = mid of array
    -  return true
  - else target < mid of array
    - recurse left side of array
  - else target > mid of array
    - recurse right side of array



const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const recursiveBinarySearch = (target, arr) => {
  // Edge case
  // If array has only 1 element, and that element is not our search value, end the function
  if (arr.length === 1 && arr[0] !== target) return false;

  // Get middle of array
  let mid = Math.floor(arr.length / 2);

  // Compare the search value to the middle

  // If it’s equal, return the index/value/true/whatever
  if (target === arr[mid]) {
    return sortedArray.indexOf(target);

    // If it’s less than, remove the right half of the array, and rerun algo
  } else if (target < arr[mid]) {
    return recursiveBinarySearch(target, arr.slice(0, mid));

    // If it’s greater than, remove the left half of the array, and rerun algo
  } else if (target > arr[mid]) {
    return recursiveBinarySearch(target, arr.slice(mid));
  }
};

console.log('recursiveBinarySearch:', recursiveBinarySearch(4, sortedArray));

*/

//==========================================================

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 3;

// indexBS
const indexBS = (target, arr) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (target < arr[mid]) high = mid - 1;
    else if (target > arr[mid]) low = mid + 1;
    else return mid;
  }
};

console.log('indexBS:', indexBS(target, sortedArray));

