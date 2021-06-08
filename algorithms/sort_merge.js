/*


- https://visualgo.net/en/sorting
- https://www.youtube.com/watch?v=bloGLgBTOug


BigO = O(n log n)


1. Array with one element is already sorted
2. Continue to split arrays until only 1 element in each array
3. To combine into sorted arrays, sort by comparing the 0 index of each array and push smaller element into a sorted array
4. Move remaining sorted elements to end of main array


2 functions
1. sorting
  - takes in unsorted array
  - return array if <= 1 element
  - slice array in halves
  - merge the recursively sorted halves

2. merging
  - takes in left and right halves of array
  - create empty merge array
  - while the left and right arrays both contain elements
    - if first element in left array is <= right array
      - shift left array and push into result array
    - else shift right array and push into result array


Sort
1. sort takes in an array
2. if array is <= 1 element, return it
3. get middle index
4. slice array into two halves
5. merge the recursively sorted halves and return it

Merge
1. merge takes in a left and right array
2. create result array
3. while both arrays have elements
   - compare the first element of each
   - push the lower number into the result array
4. clean up left and right arrays
   - while the leftArray has element, shift it and push to result array
   - while the rightArray has element, shift it and push to result array
5. return result

*/

const numbers = [34, 203, 3, 746, 200, 984, 198, 764, 9];

const sort = array => {
  // Base case, array already sorted if it's just one element
  if (array.length <= 1) return array;

  // Find the middle of the array, using Math.floor to get a whole number, and assign to a variable
  const mid = Math.floor(array.length / 2);

  // Split arrays if needed
  // Slice the array in two at the middle point, and create two variable to hold each array side

  const leftArray = array.slice(0, mid);
  const rightArray = array.slice(mid);

  // Call the merge function. and pass in the sort function twice, as two parameters, one with the leftside array as a parameter, and the other with the right side array as a parameter
  return merge(sort(leftArray), sort(rightArray));
};

// Create the merge function, with 2 parameters, one for each side of the arrays
const merge = (leftArray, rightArray) => {
  // Create an empty array and asign to a variable to store the results

  const result = [];

  // Create a while loop that checks if both the leftArray and rightArray have elements to compare, using .length property

  while (leftArray.length && rightArray.length) {
    // Create a conditional in the while loop to compare if the leftArray[0] index is <= to the rightArray[0] index

    if (leftArray[0] <= rightArray[0]) {
      //  if true, shift out the leftArray element and push to the result array

      result.push(leftArray.shift());
    } else {
      // else, shift out the rightArray element and push to the result array

      result.push(rightArray.shift());
    }
  }

  // Clean up of remaining element
  // Create 2 while loops for if either the leftArray or rightArray does not have elements to compare

  while (leftArray.length) {
    //  if the leftArray has an element, shift it out and push to result array

    result.push(leftArray.shift());
  }

  while (rightArray.length) {
    //  if the rightArray has an element, shift it out and push to result array

    result.push(rightArray.shift());
  }

  // Return the result array
  return result;
};

console.log(sort(numbers));
