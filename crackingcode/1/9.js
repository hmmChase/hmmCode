var stringRotation = function (string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }

  return (string2 + string2).includes(string1); // one call of isSubString
};

// Approaches:
// a) sorting chars before comparing -> know if it is permutation but not know if it is in the right order
// b) look for starting character before moving around and rotating -> starting characters might repeat
// c) break string 2 into a front and back, and ensure that front tallies with isSubstring before doing isSubstring

// Test
console.log(stringRotation('waterbottle', 'erbottlewat'), true);
console.log(stringRotation('waterbottle', 'erbotlewatt'), false);
console.log(stringRotation('aaata', 'aataa'), true);

// ------------------------------------

export function stringRotation(str1, str2) {
  if (!str1 || !str1.length || !str2 || !str2.length)
    throw Error('invalid input');

  if (str1.length !== str2.length) return false;

  return (str2 + str2).indexOf(str1) > -1;
}

// console.log(stringRotation('waterbottle', 'erbottlewat'));
