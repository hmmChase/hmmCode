/*

540. Single Element in a Sorted Array
Medium

You are given a sorted array consisting of only integers where every element
appears exactly twice, except for one element which appears exactly once.
Find this single element that appears only once.

Follow up: Your solution should run in O(log n) time and O(1) space.



Example 1:

Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2
Example 2:

Input: nums = [3,3,7,7,10,11,11]
Output: 10


Constraints:

1 <= nums.length <= 10^5
0 <= nums[i] <= 10^5

*/

/**
 * @param {number[]} nums
 * @return {number}
 */

const nums = [1, 1, 2, 3, 3, 4, 4, 8, 8];

const singleNonDuplicate = nums => {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    let left = mid - 1;
    let right = mid + 1;

    if (nums[mid + 1] !== nums[mid] && nums[mid - 1] !== nums[mid])
      return nums[mid];

    if (nums[left] === nums[mid]) {
      if ((left - start) % 2 === 0) {
        start = right;
      } else {
        end = mid - 2;
      }
    } else if (nums[right] === nums[mid]) {
      if ((end - right) % 2 === 0) {
        end = mid - 1;
      } else {
        start = mid + 2;
      }
    }
  }

  return nums[start];
};

console.log(singleNonDuplicate(nums));
