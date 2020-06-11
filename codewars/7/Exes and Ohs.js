// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  const strLower = str.toLowerCase();
  let o = 0;
  let x = 0;

  for (letter of strLower) {
    if (letter === 'o') o++;
    if (letter === 'x') x++;
  }

  return o === x;
}

console.log(XO('xxOo'));

// Test.assertEquals(XO('xo'),true);
// Test.assertEquals(XO("xxOo"),true);
// Test.assertEquals(XO("xxxm"),false);
// Test.assertEquals(XO("Oo"),false);
// Test.assertEquals(XO("ooom"),false);
