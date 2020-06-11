// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters,

// each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
  const argsArr = [...arguments];
  return argsArr
    .reduce((lettersArray, string) => {
      const splitString = string.split('');
      return [...lettersArray, ...splitString];
    }, [])
    .sort()
    .filter((letter, i, arr) => arr.indexOf(letter) === i)
    .join('');
}

console.log(
  'result: ',
  longest('loopingisfunbutdangerous', 'lessdangerousthancoding')
);

// Test.describe("longest",function() {
//   Test.it("Basic tests",function() {
//       Test.assertEquals(longest("aretheyhere", "yestheyarehere"), "aehrsty")
//       Test.assertEquals(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
//       Test.assertEquals(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")
//   })})
