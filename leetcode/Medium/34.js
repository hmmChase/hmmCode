/*

34. Find First and Last Position of Element in Sorted Array
Medium

Given an array of integers nums sorted in ascending order, find the starting
and ending position of a given target value.

If target is not found in the array, return [-1, -1].

Follow up: Could you write an algorithm with O(log n) runtime complexity?



Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]


Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// const searchRange = (nums, target) => {
//   let i = 0;
//   let j = nums.length - 1;
//   let start = -1;
//   let end = -1;
//   let mid = -1;

//   while (i <= j) {
//     mid = ~~(i + (j - i) / 2);

//     if (nums[mid] === target) {
//       start = mid;
//       end = mid;
//       while (nums[start - 1] === target) {
//         start -= 1;
//       }
//       while (nums[end + 1] === target) {
//         end += 1;
//       }
//       return [start, end];
//     } else if (nums[mid] < target) {
//       i = mid + 1;
//     } else {
//       j = mid - 1;
//     }
//   }

//   return [start, end];
// };

// var searchRange = function (nums, target) {
//   return [find(nums, target), find(nums, target, false)];
// };

// function find(nums, target, findMin = true) {
//   let min = 0;
//   let max = nums.length - 1;

//   while (min <= max) {
//     const mid = Math.floor((min + max) / 2);

//     if (nums[mid] > target) {
//       max = mid - 1;
//     } else if (nums[mid] < target) {
//       min = mid + 1;
//     } else {
//       if (findMin) {
//         if (nums[mid - 1] == target) max = mid - 1;
//         else return mid;
//       } else {
//         if (nums[mid + 1] == target) min = mid + 1;
//         else return mid;
//       }
//     }
//   }

//   return -1;
// }

const searchRange = (nums, target) => {
  let result = [-1, -1];
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] < target) {
      low = mid + 1;
    } else if (nums[mid] > target) {
      high = mid - 1;
    } else {
      let left = mid;
      let right = mid;

      while (nums[left] === target && left >= 0) {
        left -= 1;
      }

      result[0] = left + 1;

      while (nums[right] === target && right < nums.length) {
        right += 1;
      }

      result[1] = right - 1;

      return result;
    }
  }

  return result;
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
