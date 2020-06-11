// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
  const countedObj = text.split('').reduce((countObj, ele) => {
    const eleLower = ele.toLowerCase();

    if (countObj[eleLower]) countObj[eleLower]++;
    else countObj[eleLower] = 1;

    return countObj;
  }, {});

  return Object.values(countedObj).reduce((count, ele) => {
    if (ele > 1) count++;
    return count;
  }, 0);
}

// function duplicateCount(aa) {
//   return text
//     .toLowerCase()
//     .split('')
//     .filter((val, i, arr) => {
//       return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
//     }).length;
// }

console.log(duplicateCount('aabBcde'));

// Test.assertEquals(duplicateCount(""), 0);
// Test.assertEquals(duplicateCount("abcde"), 0);
// Test.assertEquals(duplicateCount("aabbcde"), 2);
// Test.assertEquals(duplicateCount("aabBcde"), 2,"should ignore case");
// Test.assertEquals(duplicateCount("Indivisibility"), 1)
// Test.assertEquals(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")

/*
create a hashmap to keep track of count

return number of props > 1
*/
