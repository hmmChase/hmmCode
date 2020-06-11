// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  return str.split('').reduce((count, letter) => {
    console.log('TCL: getCount -> count', count);
    console.log('TCL: getCount -> letter', letter);
    if (
      letter === 'a' ||
      letter === 'e' ||
      letter === 'i' ||
      letter === 'o' ||
      letter === 'u'
    ) {
      count++;
    }
    return count;
  }, 0);
}

console.log(getCount('abracadabraeeeaaa'));

// describe("Case 1", function(){
//   it ("should be defined", function(){
//       Test.assertEquals(getCount("abracadabra"), 5)
//   });
// });
