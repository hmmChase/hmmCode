/*


- https://visualgo.net/en/sorting
- https://www.youtube.com/watch?v=MZaf_9IZCrc

BigO = O(n log n)

1. Take last element of the array and use as a pivot point
2. Loop through array, placing elements on each side of pivot, depending on their value
3. Now that pivot card is sorted
4. Take the pivot card on each side of the sorted pivot and repeat the process until all the cards are sorted

  - Base case, array already sorted if it's just one element
  - Create variable for pivot, which pops the last element from the array
  - Create variables for the lessThan and greaterThan arrays
  - Create a for loop to loop through array
    - create a conditional to compare elements with pivot
    - if element is less than the pivot
      - push element into lessThan array
      - else push element into greaterThan array
  - Return a combined array with the pivot element in the correct place
  - Recursively call quicksort on each side array, placing the pivot in it's sorted position, and combine into a new array

*/

const numbers = [34, 203, 3, 746, 200, 984, 198, 764, 9];

const quickSort = array => {
  // Base case, array already sorted if it's just one element
  if (array.length <= 1) return array;

  // Create variable for pivot, which pops the last element from the array
  const pivot = array.pop();

  // Create variables for the lessThan and greaterThan arrays
  const greaterThan = [];
  const lessThan = [];

  // Create a for loop to loop through array
  for (let i = 0; i < array.length; i++) {
    // create a conditional to compare elements with pivot
    // if element is less than the pivot
    if (array[i] < pivot) {
      // push element into lessThan array

      lessThan.push(array[i]);
    } else {
      // else push element into greaterThan array

      greaterThan.push(array[i]);
    }
  }

  // Return a combined array with the pivot element in the correct place
  // Recursively call quicksort on each side array, placing the pivot in it's sorted position, and combine into a new array
  return [...quickSort(lessThan), pivot, ...quickSort(greaterThan)];
};

console.log(quickSort(numbers));
