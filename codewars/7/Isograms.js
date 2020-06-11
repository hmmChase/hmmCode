// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// isIsogram( "Dermatoglyphics" ) == true
// isIsogram( "aba" ) == false
// isIsogram( "moOse" ) == false // -- ignore letter case

function isIsogram(str) {
  console.log(': isIsogram -> str', str);

  return str
    .split('')
    .map(ele => ele.toLowerCase())
    .every((ele, i, arr) => {
      const firstIdx = arr.indexOf(ele);
      const lastIdx = arr.lastIndexOf(ele, i);

      return firstIdx === lastIdx;
    });
}

console.log(isIsogram('abcdefghijklmnopqrstuvwxyzH'));

// Test.assertSimilar( isIsogram("Dermatoglyphics"), true );
// Test.assertSimilar( isIsogram("isogram"), true );
// Test.assertSimilar( isIsogram("aba"), false, "same chars may not be adjacent" );
// Test.assertSimilar( isIsogram("moOse"), false, "same chars may not be same case" );
// Test.assertSimilar( isIsogram("isIsogram"), false );
// Test.assertSimilar( isIsogram(""), true, "an empty string is a valid isogram" );
