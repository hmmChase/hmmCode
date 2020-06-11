// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered
// Input strings s1 and s2 are null terminated.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

// function scramble(str1, str2) {
//   const str1Copy = str1.split('');

//   for (const [index, letter] of str2.split('').entries()) {
//     const foundIndex = str1Copy.indexOf(letter);

//     if (foundIndex === -1) return false;

//     str1Copy.splice(foundIndex, 1);
//   }

//   return true;
// }

function scramble(str1, str2) {
  let hashMap1 = {};
  let hashMap2 = {};

  for (const letter of str1.split('')) {
    if (hashMap1[letter]) {
      hashMap1[letter]++;
    } else {
      hashMap1[letter] = 1;
    }
  }

  for (const letter of str2.split('')) {
    if (hashMap2[letter]) {
      hashMap2[letter]++;
    } else {
      hashMap2[letter] = 1;
    }
  }

  for (const prop in hashMap2) {
    if (!hashMap1[prop] || hashMap1[prop] < hashMap2[prop]) {
      return false;
    }
  }
  return true;
}

console.log(scramble('katas', 'steak'));

//  describe('Example Tests', function(){
//   Test.assertEquals(scramble('rkqodlw','world'),true);
//   Test.assertEquals(scramble('cedewaraaossoqqyt','codewars'),true);
//   Test.assertEquals(scramble('katas','steak'),false);
//   Test.assertEquals(scramble('scriptjava','javascript'),true);
//   Test.assertEquals(scramble('scriptingjava','javascript'),true);
//   Test.assertEquals(scramble('scriptsjava','javascripts'),true);
//   Test.assertEquals(scramble('jscripts','javascript'),false);
//   Test.assertEquals(scramble('aabbcamaomsccdd','commas'),true);
// });

/*
str 2 letters should be found in str1

loop through str1
if letter is found in str2, remove letter from str1
if letter is not found return false


*/
