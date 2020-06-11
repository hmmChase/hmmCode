// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  const wordLength = s.split(' ').map(word => word.length);
  return Math.min(...wordLength);
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps'));

// Test.describe("Example tests",_=>{
//   Test.assertEquals(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
//   Test.assertEquals(findShort("turns out random test cases are easier than writing out basic ones"), 3);
//   });
